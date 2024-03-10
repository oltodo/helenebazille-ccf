import { ReactNode } from "react";

import * as ExpertiseCard from "../components/ExpertiseCard";

export type Expertise = "children" | "parents" | "couple" | "crisis" | "drugs";

export type ExpertiseInfo = {
  content: ReactNode;
  label: string;
  id: string;
};

export const expertises: ExpertiseInfo[] = [
  {
    content: (
      <>
        <p>
          Que ce soit le fait de devenir parent pour la toute première fois ou
          pour la énième fois, l’entrée de son enfant dans l’adolescence, voire
          même son départ pour les études, des conflits difficiles à gérer dans
          la fratrie, une difficulté à trouver sa place ou à éduquer ses enfants
          et poser des limites ; la vie de famille est pleine de défis, parsemée
          de ce mélange doux amer provoqué par l’alternance étonnante de moments
          de grande joie, de profonde souffrance, ou encore de fatigue et de
          lassitude liées au rythme effréné du quotidien.
        </p>
        <p>
          Par exemple, la naissance d’un bébé et son arrivée dans la famille est
          un des moments forts de la vie, source de réjouissances et de partage
          ; mais dans les faits, tout n’est pas si simple. Le fossé entre nos
          projections et la réalité peut être important et engendrer
          incompréhensions, mal-être, angoisse, instabilité voire même tristesse
          et ressentiment.
        </p>
        <ExpertiseCard.Helping>
          <p>
            Le conseil conjugal et familial vient mettre des mots sur les
            incompréhensions, de la distance sur l’affect envahissant, un baume
            apaisant sur l’âpreté du vécu actuel. Le fait de partager à un
            professionnel de l’écoute ce qui est vécu permet de faire du tri
            dans les pensées et les ressentis, cela dresse aussi un état des
            lieux de la situation présente.
          </p>
        </ExpertiseCard.Helping>
      </>
    ),
    label: "Soutien à la parentalité",
    id: "parents",
  },
  {
    content: (
      <>
        <p>
          Le couple est une aventure à part entière. Il peut être facile
          d’entretenir de bonnes relations avec son entourage, mais la tâche
          devient bien plus ardue lorsqu’il s’agit de vivre avec une personne au
          quotidien sur le long terme. L’idéal du vivre ensemble a une forte
          tendance à s’étioler et se transformer en une froide et morne
          cohabitation, voire un ring de batailles incessantes...
        </p>
        <ExpertiseCard.Helping>
          <p>
            Le conseiller conjugal et familial est formé à l’écoute attentive et
            active. En observant le plus finement possible les interactions
            entre les conjoints, ses échanges avec le couple, et ce que le
            couple dit de lui-même, le CCF parvient à se faire une idée assez
            précise du lien conjugal en place. En posant des mots mais aussi du
            sens sur ce qui se joue de douloureux dans la relation, le fardeau
            s’allège petit à petit. Pour illustrer ces propos, imaginez une
            grosse pelote de laine qui est en fait constituée de plusieurs
            petites pelotes de laine, mais dont les fils sont tellement
            entremêlés qu’il devient impossible de distinguer autre chose qu’une
            masse informe, laineuse et multicolore. En rien, les jolies petites
            pelotes de laine bien distinctes du début sont mises en valeur. Il
            en est de même pour le couple, la pelote émotionnelle est parfois si
            dense et volumineuse qu’il n’est plus possible pour le couple d’y
            voir clair et de la démêler par lui-même. Le CCF aide et accompagne
            le couple dans ce travail.
          </p>
        </ExpertiseCard.Helping>
      </>
    ),
    label: "Consolidation du couple",
    id: "couple",
  },
  {
    content: (
      <>
        <p>
          Deuil, séparation, maladie, divorce, déménagement, réorientation
          professionnelle, départ à la retraite, rupture amicale... La liste est
          loin d’être exhaustive puisque nous parlons ici de toutes les périodes
          compliquées de la vie. Aussi variées soient-elles, nous aurons tous à
          affronter au moins une de ces épreuves, une fois dans notre vie.
        </p>
        <ExpertiseCard.Helping>
          <p>
            L’être humain est un être social, fait pour le partage et le
            dialogue, il n’arrive pas au monde tout seul, comme il ne grandit
            pas et ne s’épanouit pas en étant seul. Nous sommes le fruit de nos
            relations, elles constituent en grande partie qui nous sommes. Sans
            aller forcément creuser dans le passé, le CCF se tient à votre côté
            dans le moment présent, dans ce que vous êtes en train de vivre.
          </p>
          <p>
            Il arrive des moments dans la vie où l’on ne se reconnait plus, où
            l’on ne reconnait plus ses proches, où les doutes nous assaillent,
            où nous avons l’impression que notre faculté de penser et de
            ressentir nous a été ôtée. Sensation de vide, sentiment de trahison
            ou de culpabilité, expérience insupportable de solitude ou
            d’incompréhension, c’est ce que l’on appelle une période de crise.
          </p>
          <p>
            Le CCF peut vous aider à passer cette étape déstabilisante de façon
            plus douce. Le fait de se sentir accueilli, écouté et compris rend
            la crise moins accablante, apporte du soutien et un réconfort
            salutaire pour maintenir un fonctionnement de vie le moins altéré
            possible.
          </p>
        </ExpertiseCard.Helping>
      </>
    ),
    label: "Dépassement des périodes de crise",
    id: "crisis",
  },
  {
    content: (
      <>
        <p>
          Le désir d’enfant est un désir puissant, particulièrement fort et
          vivace. Lorsqu’il n’est pas satisfait, il envahit toute la pensée,
          devient le seul et unique sujet de préoccupation. Il monopolise une
          bonne partie des ressources de la personne (psychiques, physiques,
          émotionnelles, temporelles...) et se transforme un jour en une
          véritable idée fixe dont il est bien difficile de se libérer. Les
          personnes rencontrant des problèmes liés à la fertilité passent par
          toute une palette de sentiments causant détresse et souffrance :
          honte, culpabilité, tristesse, colère, incompréhension, jalousie,
          amertume...
        </p>
        <ExpertiseCard.Helping>
          <p>
            Je ne réinvente pas la roue, je ne propose pas une technique de
            pointe dans ce domaine mais un juste retour à l’essentiel. C’est en
            passant par l’étape de la parole (prise de paroles de votre part et
            écoute professionnelle de ma part) que les échanges qui découleront
            de nos entretiens vous feront cheminer vers une prise de conscience
            éclairée de votre situation : ce que cela implique, vous fait vivre,
            accueillir vos émotions, comment vivre avec, comment réagir face aux
            différentes réactions de votre entourage... Le fait de parler d’une
            situation en souffrance ne résout pas toujours le problème, mais
            offre un formidable pas de côté pour vous rendre les faits moins
            subis, moins lourds. Car au-delà de la douleur et du stress causés
            par l’infertilité au niveau individuel, ses répercussions sont aussi
            néfastes pour le couple, pouvant conduire à de l’insécurité
            conjugale et une qualité de vie détériorée (étude menée en 2022 -
            Université de Montréal
            https://papyrus.bib.umontreal.ca/xmlui/handle/1866/27105) Aussi, il
            arrive que cette période amène des perturbations et des contrariétés
            dans les relations amicales. Comment réagir face à une amie qui se
            réjouit (ou se plaint) d’une énième grossesse ? Comment gérer
            l’ambivalence que cela nous fait vivre au niveau émotionnel ? Des
            séances de conseil conjugal et familial prennent tout leur sens dans
            ce type de situation.
          </p>
        </ExpertiseCard.Helping>
      </>
    ),
    label: "Accompagnement du désir d’enfant",
    id: "children",
  },
  {
    content: (
      <>
        <p>
          L’addiction est un sujet souvent tabou, bien plus encore lorsqu’il
          s’agit de l’addiction vécue dans le couple. Cela peut amener le couple
          à se sentir bien seul et sens recours face à la situation, d’autant
          plus quand un seul des conjoints est addict.
        </p>
        <ExpertiseCard.Helping>
          <p>
            En complément d’un suivi pluridisciplinaire (médical, social,
            psychologique...) recommandé et dispensé par des centres comme le
            CSAPA par exemple, il peut également être utile de faire quelques
            séances de conseil conjugal et familial pour aborder les sujets en
            souffrance, qui vous questionnent et dont vous n’avez pas
            l’opportunité d’aborder lors de vos différents suivis. L’addiction
            engendre de la détresse et de l’instabilité qui mettent à mal le
            lien conjugal. Travailler sur votre couple et la place de chacun des
            conjoints dans le couple s’avère salutaire dans ce genre de
            situation.
          </p>
        </ExpertiseCard.Helping>
      </>
    ),
    label: "Aide des couples vivant l’addiction",
    id: "drugs",
  },
];
