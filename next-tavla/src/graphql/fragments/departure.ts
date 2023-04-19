import { gql } from "../utils";
import { situationFragment } from "./situation";

const departureFragment = gql`
  ${situationFragment}
  fragment departure on EstimatedCall {
    quay {
      publicCode
    }
    destinationDisplay {
      frontText
    }
    aimedDepartureTime
    expectedDepartureTime
    serviceJourney {
      id
      transportMode
      transportSubmode
      line {
        id
        publicCode
        presentation {
          textColour
          colour
        }
      }
    }
    cancellation
    situations {
      ...situation
    }
  }
`;

export { departureFragment };
