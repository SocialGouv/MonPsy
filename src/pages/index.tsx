import Link from "next/link";
import React from "react";

import HeadTag from "../components/HeadTag";

const Page = () => {
  return (
    <>
      <HeadTag
        title="MonPsy : Le dispositif de remboursement des séances chez le psychologue | Ministère de la Santé"
        description="MonPsy est un dispositif du Ministère de la Santé permettant à chacun de bénéficier de séances remboursées avec un psychologue conventionné avec l’Assurance Maladie."
        image="Psychologist-hero.svg"
      />
      <section>
        <div className="fr-container">
          <div className="fr-grid-row fr-grid-row--center fr-grid-row--middle fr-pb-8w">
            <div className="fr-col-12 fr-col-md-6 fr-pt-4w">
              <h1>
                Vous rencontrez une situation difficile&nbsp;?
                <span className="fr-text--lead d-block fr-mt-3w">
                  Avec MonPsy, bénéficiez de 8 séances par an chez un ou une
                  psychologue
                </span>
              </h1>
              <p className="fr-text--xl fr-text--bold fr-mt-5w">
                Les séances sont remboursées&nbsp;:
              </p>
              <ul className="no-bullet">
                <li className="fr-li--icon-left fr-fi-arrow-right-line fr-fi--sm">
                  par l’Assurance Maladie
                </li>
                <li className="fr-li--icon-left fr-fi-arrow-right-line fr-fi--sm">
                  Et votre mutuelle ou complémentaire santé
                </li>
              </ul>
            </div>
            <div className="fr-col-12 fr-col-offset-md-1 fr-col-md-4">
              <img
                className="fr-mt-2w"
                src="/images/Psychologist-hero.svg"
                alt="En parler, c’est déjà se soigner"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="fr-container--fluid fr-bg--light fr-py-10w">
          <div className="fr-container">
            <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
              <div className="fr-col-12 fr-col-md-6">
                <h2>Pourquoi consulter&nbsp;?</h2>
                <ul>
                  <li>Vous avez du mal à dormir ?</li>
                  <li>Vous vous sentez dépassé·e ?</li>
                  <li>Vous êtes dans une relation toxique ?</li>
                  <li>
                    Vous avez des difficultés à échanger avec votre entourage ?
                  </li>
                  <li>
                    Vous avez besoin d’une personne à qui parler, sans jugement
                  </li>
                  <li>
                    Vous avez besoin d’une personne à qui parler, sans jugement.
                  </li>
                </ul>
                <p>
                  Quelle que soit votre situation, trouvez des psychologues à
                  votre écoute.
                </p>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <p>MonPsy c’est&nbsp;:</p>
                <ul>
                  <li>
                    Un annuaire de + de 900 psychologues partenaires
                    expérimentés sélectionnés sur leur expérience
                    professionnelle
                  </li>
                  <li>
                    Un parcours de soins pris en charge par l’Assurance Maladie
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="fr-container fr-callout fr-callout--pink-tuile fr-my-6w">
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
            <div className="fr-col-12 fr-col-md-5">
              <p>
                Le dispositif ne concerne pas les <strong>urgences</strong> et
                les personnes présentant un <strong>risque suicidaire</strong>.
              </p>
            </div>
            <div className="fr-col-12 fr-col-md-2 align-center">
              <span
                className="fr-fi-arrow-right-line fr-fi--lg"
                aria-hidden="true"
              />
            </div>

            <div className="fr-col-12 fr-col-md-5">
              <p>
                Si je suis en détresse et/ou j’ai des pensées suicidaires, je
                contacte sans attendre le <strong>3114</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="fr-container--fluid fr-bg--tilleul fr-py-10w">
          <div className="fr-container">
            <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
              <div className="fr-col-12 fr-col-md-8">
                <h2>Comment ça marche&nbsp;?</h2>
                <div className="fr-card fr-card--no-arrow fr-bg--tilleul-light">
                  <div className="fr-card__body">
                    <div className="fr-card__content">
                      <h4 className="fr-card__title">
                        1. Rencontrez un médecin
                      </h4>
                      <p className="fr-card__desc fr-text--md">
                        Le médecin échange avec vous pour s’assurer que MonPsy
                        est adapté à votre situation. Vous pouvez consulter
                        différents types de médecins (généraliste, gynécologue,
                        médecin scolaire, PMI, etc.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="fr-container fr-py-6w">
          <div className="fr-grid-row fr-grid-row--center fr-grid-row--gutters">
            <div className="fr-col-12">
              <h2>Services d’écoute anonymes et gratuits</h2>
            </div>
            <div className="fr-col-12 fr-col-md-4 fr-px-2w">
              <div className="align-center fr-my-2w fr-py-4w">
                <a
                  target="_blank"
                  className="fr-link"
                  title="3114"
                  href="https://www.3114.fr"
                  rel="noreferrer"
                >
                  <img
                    src="/images/logo-3114.svg"
                    alt="Logo 3114"
                    height="70"
                  />
                </a>
              </div>
              <p>
                Je suis en détresse et/ou j’ai des pensées suicidaires. Je veux
                aider un proche en souffrance.
              </p>
              <p>
                J’appelle le <a href="tel:3114">3114</a>, accessible 24h/24 et
                7j/7 gratuitement en France entière
              </p>
              <p>
                Un professionnel de soins formé spécifiquement à la prévention
                du suicide sera à mon écoute afin de faire le point et me
                proposer des ressources adaptées à mes besoins.
              </p>
            </div>
            <div className="fr-col-12 fr-col-md-4 fr-px-2w">
              <div className="align-center fr-my-2w">
                <a
                  target="_blank"
                  className="fr-link"
                  title="Fil santé jeunes"
                  href="https://www.filsantejeunes.com/"
                  rel="noreferrer"
                >
                  <img
                    src="/images/Filsantejeunes.jpg"
                    height="140"
                    alt="Logo Fil santé jeunes"
                  />
                </a>
              </div>
              <p>
                Permanence d’écoute téléphonique tous les jours de 9h à 23h pour
                les 12-25 ans sur les thèmes de la santé, de la sexualité, de
                l’amour, du mal être, etc.
              </p>

              <p>
                <a
                  target="_blank"
                  href="https://www.filsantejeunes.com/tchat-individuel"
                  rel="noreferrer"
                >
                  Chat individuel
                </a>{" "}
                ouvert tous les jours de 9 h à 22h
              </p>
            </div>
            <div className="fr-col-12 fr-col-md-4 fr-px-2w">
              <div className="align-center fr-my-2w">
                <a
                  target="_blank"
                  className="fr-link"
                  title="SOS Amitié"
                  href="https://www.sos-amitie.com/ "
                  rel="noreferrer"
                >
                  <img
                    src="/images/SOSAmitie.png"
                    height="140"
                    alt="Logo SOS Amitié"
                  />
                </a>
              </div>
              <p>
                Permanence d’écoute téléphonique 24h/24 et 7j/7 pour les
                personnes en détresse (tel&nbsp;:&nbsp;
                <a href="tel:+33972394050">
                  09&nbsp;72&nbsp;39&nbsp;40&nbsp;50
                </a>
                )
              </p>
              <a
                href="https://www.sos-amitie.com/chat/"
                target="_blank"
                rel="noreferrer"
              >
                Chat
              </a>{" "}
              du lundi au dimanche de 13h à 3h du matin.
            </div>
            <div className="fr-col-12">
              <h2>Information sur la santé mentale</h2>
            </div>
            <div className="fr-col-12 fr-col-lg-4">
              <div className="align-center fr-my-2w">
                <a
                  target="_blank"
                  className="fr-link"
                  title="Ameli"
                  href="https://www.ameli.fr/paris/assure/sante/themes/depression-troubles-depressifs"
                  rel="noreferrer"
                >
                  <img src="/images/cnam.png" alt="Logo CNAM" height="90" />
                </a>
              </div>
            </div>
            <div className="fr-col-12 fr-col-lg-4">
              <div className="align-center fr-my-2w">
                <a
                  target="_blank"
                  className="fr-link"
                  title="Psycom"
                  href="https://www.psycom.org/"
                  rel="noreferrer"
                >
                  <img
                    src="/images/Psycom.png"
                    height="140"
                    alt="Logo Psycom"
                  />
                </a>
              </div>
            </div>
            <div className="fr-col-12 fr-col-lg-4">
              <div className="align-center fr-my-2w">
                <a
                  target="_blank"
                  className="fr-link"
                  title="Santé publique France"
                  href="https://www.santepubliquefrance.fr/maladies-et-traumatismes/sante-mentale"
                  rel="noreferrer"
                >
                  <img
                    src="/images/Sante-publique-France-logo.svg"
                    height="140"
                    alt="Logo Santé publique France"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Page;
