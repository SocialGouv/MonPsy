import pLimit from "p-limit";
import Sequelize, { Op } from "sequelize";

import { models } from "../db/models";
import { SRID } from "../types/const/geometry";
import { FILTER } from "../types/enums/filters";
import { PUBLIC } from "../types/enums/public";
import { Psychologist } from "../types/psychologist";
import { formatCoordinates } from "./demarchesSimplifiees/parse-psychologists";
import getAddressCoordinates from "./getAddressCoordinates";

const limit = pLimit(5);

export const getOne = async (
  id: string,
  dep?: string
): Promise<Psychologist> => {
  // @ts-ignore

  return models.Psychologist.findOne({
    raw: true,
    where: { id, ...(dep ? { department: dep } : {}) },
  });
};

export const getByDepartment = async (dep: string): Promise<Psychologist[]> => {
  // @ts-ignore
  return models.Psychologist.findAll({
    raw: true,
    where: { archived: false, department: dep, state: "accepte" },
  });
};

export const countAll = async () =>
  models.Psychologist.count({
    where: { archived: false, state: "accepte" },
  });

const DEFAULT_PAGE_SIZE = 50;
export const getAll = async (filters: {
  [key in FILTER]?: string | string[];
}): Promise<Psychologist[]> => {
  const pageSize = filters[FILTER.PAGE_SIZE]
    ? parseInt(filters[FILTER.PAGE_SIZE] as string, 10)
    : DEFAULT_PAGE_SIZE;

  const pageIndex = filters[FILTER.PAGE_INDEX]
    ? parseInt(filters[FILTER.PAGE_INDEX] as string, 10)
    : 0;

  const where: any = { archived: false, state: "accepte" };
  const query: Sequelize.FindOptions<any> = {
    limit: pageSize,
    offset: pageIndex * pageSize,
    raw: true,
    where,
  };

  if (filters[FILTER.TELECONSULTATION]) {
    where.teleconsultation = true;
  }

  if (filters[FILTER.PUBLIC]) {
    where.public = {
      [Op.or]: [filters[FILTER.PUBLIC], PUBLIC.BOTH],
    };
  }

  if (filters[FILTER.LONGITUDE] && filters[FILTER.LATITUDE]) {
    query.attributes = {
      include: [
        [
          Sequelize.fn(
            "ST_Distance",
            Sequelize.col("coordinates"),
            Sequelize.fn(
              "ST_SetSRID",
              Sequelize.fn(
                "ST_MakePoint",
                filters[FILTER.LONGITUDE],
                filters[FILTER.LATITUDE]
              ),
              SRID
            )
          ),
          "distance",
        ],
      ],
    };
    query.order = Sequelize.literal("distance ASC");
  }

  //@ts-ignore
  return models.Psychologist.findAll(query);
};

export const saveMany = async (psychologists: Psychologist[]) => {
  //@ts-ignore
  return models.Psychologist.bulkCreate(psychologists, {
    updateOnDuplicate: ["id"],
  });
};

export const update = async (
  id: string,
  psychologist: Partial<Psychologist>
) => {
  const displayName = psychologist.firstName + " " + psychologist.lastName;
  const coordinates = await getAddressCoordinates(
    displayName,
    psychologist.address
  );
  let secondAddressCoordinates;
  if (psychologist.secondAddress) {
    secondAddressCoordinates = await getAddressCoordinates(
      displayName,
      psychologist.secondAddress
    );
  }
  console.log(psychologist.addressAdditional);
  return models.Psychologist.update(
    {
      address: psychologist.address,
      addressAdditional: psychologist.addressAdditional,
      secondAddress: psychologist.secondAddress,
      secondAddressAdditional: psychologist.secondAddressAdditional,
      cdsmsp: psychologist.cdsmsp,
      coordinates: coordinates ? formatCoordinates(coordinates) : null,
      secondAddressCoordinates: secondAddressCoordinates
        ? formatCoordinates(secondAddressCoordinates)
        : null,
      displayEmail: psychologist.displayEmail,
      email: psychologist.email,
      firstName: psychologist.firstName,
      languages: psychologist.languages,
      lastName: psychologist.lastName,
      phone: psychologist.phone,
      displayPhone: psychologist.displayPhone,
      public: psychologist.public,
      teleconsultation: psychologist.teleconsultation,
      visible: psychologist.visible,
      website: psychologist.website,
    },
    { where: { id } }
  );
};

export const updateState = async (newStates: Partial<Psychologist>[]) => {
  return Promise.all(
    newStates.map((newState) =>
      limit(() =>
        models.Psychologist.update(
          {
            archived: newState.archived,
            state: newState.state,
          },
          { where: { id: newState.id } }
        )
      )
    )
  );
};

export const filterIdsNotInDb = async (psy): Promise<number[]> => {
  // @ts-ignore
  const psyInDb: { id: number }[] = await models.Psychologist.findAll({
    attributes: ["id"],
    raw: true,
    where: { state: "accepte" },
  });

  return psy
    .filter((psy) => !psyInDb.find((fromDb) => psy.id === fromDb.id))
    .map((psy) => psy.id);
};
