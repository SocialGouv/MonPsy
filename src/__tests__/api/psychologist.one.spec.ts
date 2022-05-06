/* eslint-disable jest/no-conditional-expect */
import {models} from "../../db/models";
import {getOnePsychologist, groups} from "../../db/seeds/psychologist";
import config from "../../services/config";
import {makeAuthenticatedClient} from "./login";

const defaultValues = {
  address: "new address",
  cdsmsp: "cdsmsp",
  displayEmail: true,
  email: "me@you.fr",
  firstName: "Georges",
  languages: "Poésie, Rap",
  lastName: "Moustaki",
  phone: "Mon 06",
  public: "Adultes",
  teleconsultation: true,
  visible: true,
  website: "liberte.fr",
};

describe("/api/psychologist/[id]", () => {
  let client;
  let nonAuthorizedClient;
  beforeAll(async () => {
    await models.Psychologist.destroy({ where: {} });

    const psy = getOnePsychologist({ id: 1 });
    // @ts-ignore
    await models.Psychologist.create(psy);

    const groupdId = groups.findIndex((g) => psy.department === g.id);
    client = await makeAuthenticatedClient(
      `${groupdId}@test.fr`,
      `admin${groupdId}`
    );

    const otherGroupdId = groups.findIndex((g) => psy.department !== g.id);
    nonAuthorizedClient = await makeAuthenticatedClient(
      `${otherGroupdId}@test.fr`,
      `admin${otherGroupdId}`
    );
  });

  it("should return a 200 when everything is filled for a Psychologist", async () => {
    const result = await client(`${config.nextAuthUrl}/api/psychologists/1`, {
      json: defaultValues,
      method: "PUT",
    });

    expect(result.statusCode).toEqual(200);
  });

  it("should return a 404 when user is not authorized", async () => {
    expect.assertions(1);
    try {
      await nonAuthorizedClient(`${config.nextAuthUrl}/api/psychologists/1`, {
        json: defaultValues,
        method: "PUT",
      });
    } catch (e) {
      expect(e.response.statusCode).toEqual(404);
    }
  });

  it("should return a 404 when psy is not found", async () => {
    expect.assertions(1);
    try {
      await client(`${config.nextAuthUrl}/api/psychologists/123456`, {
        json: defaultValues,
        method: "PUT",
      });
    } catch (e) {
      expect(e.response.statusCode).toEqual(404);
    }
  });

  const successes = [
    { label: "with empty cdsmsp", values: { cdsmsp: "" } },
    { label: "with empty email", values: { email: "" } },
    { label: "with empty languages", values: { languages: "" } },
    { label: "with empty website", values: { website: "" } },
  ];
  successes.forEach((success) =>
    it(`should return a 200 for a psychologist update ${success.label}`, async () => {
      const result = await client(`${config.nextAuthUrl}/api/psychologists/1`, {
        json: { ...defaultValues, ...success.values },
        method: "PUT",
      });

      expect(result.statusCode).toEqual(200);
    })
  );

  const errors = [
    { label: "without address", values: { address: undefined } },
    { label: "with empty address", values: { address: "" } },
    { label: "with wrong address", values: { address: 124 } },
    { label: "with wrong cdsmsp", values: { cdsmsp: 124 } },
    { label: "without displayEmail", values: { displayEmail: undefined } },
    { label: "with wrong email", values: { email: "test" } },
    { label: "without firstName", values: { firstName: undefined } },
    { label: "with empty firstName", values: { firstName: "" } },
    { label: "with wrong firstName", values: { firstName: 124 } },
    { label: "without lastName", values: { lastName: undefined } },
    { label: "with empty lastName", values: { lastName: "" } },
    { label: "with wrong lastName", values: { lastName: 124 } },
    { label: "without phone", values: { phone: undefined } },
    { label: "with empty phone", values: { phone: "" } },
    { label: "with wrong phone", values: { phone: 124 } },
    { label: "without public", values: { public: undefined } },
    { label: "with wrong public", values: { public: "public" } },
    {
      label: "without teleconsultation",
      values: { teleconsultation: undefined },
    },
    { label: "without visible", values: { visible: undefined } },
    { label: "without id", values: { id: 12 } },
  ];

  errors.forEach((error) =>
    it(`Should return a 400 for a psychologist update ${error.label}`, async () => {
      expect.assertions(1);
      try {
        await client(`${config.nextAuthUrl}/api/psychologists/1`, {
          json: { ...defaultValues, ...error.values },
          method: "PUT",
        });
      } catch (e) {
        expect(e.response.statusCode).toEqual(400);
      }
    })
  );
});