/* eslint-disable */
import type * as Types from 'types/graphql-schema'

import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core'
export type TDepartureFragment = {
    __typename?: 'EstimatedCall'
    aimedDepartureTime: DateTime
    expectedDepartureTime: DateTime
    cancellation: boolean
    quay: { __typename?: 'Quay'; publicCode: string | null }
    destinationDisplay: {
        __typename?: 'DestinationDisplay'
        frontText: string | null
        via: Array<string | null> | null
    } | null
    serviceJourney: {
        __typename?: 'ServiceJourney'
        id: string
        transportMode: Types.TTransportMode | null
        transportSubmode: Types.TTransportSubmode | null
        line: {
            __typename?: 'Line'
            id: string
            publicCode: string | null
            presentation: {
                __typename?: 'Presentation'
                textColour: string | null
                colour: string | null
            } | null
        }
    }
    situations: Array<{
        __typename?: 'PtSituationElement'
        id: string
        description: Array<{
            __typename?: 'MultilingualString'
            value: string
            language: string | null
        }>
        summary: Array<{
            __typename?: 'MultilingualString'
            value: string
            language: string | null
        }>
    }>
}

export type TLinesFragment = {
    __typename?: 'Quay'
    lines: Array<{
        __typename?: 'Line'
        id: string
        publicCode: string | null
        name: string | null
        transportMode: Types.TTransportMode | null
    }>
}

export type TSituationFragment = {
    __typename?: 'PtSituationElement'
    id: string
    description: Array<{
        __typename?: 'MultilingualString'
        value: string
        language: string | null
    }>
    summary: Array<{
        __typename?: 'MultilingualString'
        value: string
        language: string | null
    }>
}

export type TGetQuayQueryVariables = Types.Exact<{
    quayId: Types.Scalars['String']
    whitelistedTransportModes?: Types.InputMaybe<
        | Array<Types.InputMaybe<Types.TTransportMode>>
        | Types.InputMaybe<Types.TTransportMode>
    >
    whitelistedLines?: Types.InputMaybe<
        Array<Types.Scalars['ID']> | Types.Scalars['ID']
    >
}>

export type TGetQuayQuery = {
    __typename?: 'QueryType'
    quay: {
        __typename?: 'Quay'
        name: string
        description: string | null
        publicCode: string | null
        estimatedCalls: Array<{
            __typename?: 'EstimatedCall'
            aimedDepartureTime: DateTime
            expectedDepartureTime: DateTime
            cancellation: boolean
            quay: { __typename?: 'Quay'; publicCode: string | null }
            destinationDisplay: {
                __typename?: 'DestinationDisplay'
                frontText: string | null
                via: Array<string | null> | null
            } | null
            serviceJourney: {
                __typename?: 'ServiceJourney'
                id: string
                transportMode: Types.TTransportMode | null
                transportSubmode: Types.TTransportSubmode | null
                line: {
                    __typename?: 'Line'
                    id: string
                    publicCode: string | null
                    presentation: {
                        __typename?: 'Presentation'
                        textColour: string | null
                        colour: string | null
                    } | null
                }
            }
            situations: Array<{
                __typename?: 'PtSituationElement'
                id: string
                description: Array<{
                    __typename?: 'MultilingualString'
                    value: string
                    language: string | null
                }>
                summary: Array<{
                    __typename?: 'MultilingualString'
                    value: string
                    language: string | null
                }>
            }>
        }>
        lines: Array<{
            __typename?: 'Line'
            id: string
            publicCode: string | null
            name: string | null
            transportMode: Types.TTransportMode | null
        }>
    } | null
}

export type TQuayNameQueryVariables = Types.Exact<{
    id: Types.Scalars['String']
}>

export type TQuayNameQuery = {
    __typename?: 'QueryType'
    quay: {
        __typename?: 'Quay'
        name: string
        description: string | null
        publicCode: string | null
        id: string
    } | null
}

export type TQuaysSearchQueryVariables = Types.Exact<{
    stopPlaceId: Types.Scalars['String']
}>

export type TQuaysSearchQuery = {
    __typename?: 'QueryType'
    stopPlace: {
        __typename?: 'StopPlace'
        quays: Array<{
            __typename?: 'Quay'
            id: string
            publicCode: string | null
            description: string | null
        } | null> | null
    } | null
}

export type TStopPlaceQueryVariables = Types.Exact<{
    stopPlaceId: Types.Scalars['String']
    whitelistedTransportModes?: Types.InputMaybe<
        | Array<Types.InputMaybe<Types.TTransportMode>>
        | Types.InputMaybe<Types.TTransportMode>
    >
    whitelistedLines?: Types.InputMaybe<
        Array<Types.Scalars['ID']> | Types.Scalars['ID']
    >
}>

export type TStopPlaceQuery = {
    __typename?: 'QueryType'
    stopPlace: {
        __typename?: 'StopPlace'
        name: string
        transportMode: Array<Types.TTransportMode | null> | null
        estimatedCalls: Array<{
            __typename?: 'EstimatedCall'
            aimedDepartureTime: DateTime
            expectedDepartureTime: DateTime
            cancellation: boolean
            quay: { __typename?: 'Quay'; publicCode: string | null }
            destinationDisplay: {
                __typename?: 'DestinationDisplay'
                frontText: string | null
                via: Array<string | null> | null
            } | null
            serviceJourney: {
                __typename?: 'ServiceJourney'
                id: string
                transportMode: Types.TTransportMode | null
                transportSubmode: Types.TTransportSubmode | null
                line: {
                    __typename?: 'Line'
                    id: string
                    publicCode: string | null
                    presentation: {
                        __typename?: 'Presentation'
                        textColour: string | null
                        colour: string | null
                    } | null
                }
            }
            situations: Array<{
                __typename?: 'PtSituationElement'
                id: string
                description: Array<{
                    __typename?: 'MultilingualString'
                    value: string
                    language: string | null
                }>
                summary: Array<{
                    __typename?: 'MultilingualString'
                    value: string
                    language: string | null
                }>
            }>
        }>
    } | null
}

export type TStopPlaceNameQueryVariables = Types.Exact<{
    id: Types.Scalars['String']
}>

export type TStopPlaceNameQuery = {
    __typename?: 'QueryType'
    stopPlace: { __typename?: 'StopPlace'; name: string; id: string } | null
}

export type TStopPlaceSettingsQueryVariables = Types.Exact<{
    id: Types.Scalars['String']
}>

export type TStopPlaceSettingsQuery = {
    __typename?: 'QueryType'
    stopPlace: {
        __typename?: 'StopPlace'
        name: string
        quays: Array<{
            __typename?: 'Quay'
            lines: Array<{
                __typename?: 'Line'
                id: string
                publicCode: string | null
                name: string | null
                transportMode: Types.TTransportMode | null
            }>
        } | null> | null
    } | null
}

export class TypedDocumentString<TResult, TVariables>
    extends String
    implements DocumentTypeDecoration<TResult, TVariables>
{
    __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType']

    constructor(private value: string, public __meta__?: Record<string, any>) {
        super(value)
    }

    toString(): string & DocumentTypeDecoration<TResult, TVariables> {
        return this.value
    }
}
export const SituationFragment = new TypedDocumentString(
    `
    fragment situation on PtSituationElement {
  id
  description {
    value
    language
  }
  summary {
    value
    language
  }
}
    `,
    { fragmentName: 'situation' },
) as unknown as TypedDocumentString<TSituationFragment, unknown>
export const DepartureFragment = new TypedDocumentString(
    `
    fragment departure on EstimatedCall {
  quay {
    publicCode
  }
  destinationDisplay {
    frontText
    via
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
    fragment situation on PtSituationElement {
  id
  description {
    value
    language
  }
  summary {
    value
    language
  }
}`,
    { fragmentName: 'departure' },
) as unknown as TypedDocumentString<TDepartureFragment, unknown>
export const LinesFragment = new TypedDocumentString(
    `
    fragment lines on Quay {
  lines {
    id
    publicCode
    name
    transportMode
  }
}
    `,
    { fragmentName: 'lines' },
) as unknown as TypedDocumentString<TLinesFragment, unknown>
export const GetQuayQuery = new TypedDocumentString(`
    query getQuay($quayId: String!, $whitelistedTransportModes: [TransportMode], $whitelistedLines: [ID!]) {
  quay(id: $quayId) {
    name
    description
    publicCode
    ...lines
    estimatedCalls(
      numberOfDepartures: 20
      whiteListedModes: $whitelistedTransportModes
      whiteListed: {lines: $whitelistedLines}
    ) {
      ...departure
    }
  }
}
    fragment departure on EstimatedCall {
  quay {
    publicCode
  }
  destinationDisplay {
    frontText
    via
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
fragment lines on Quay {
  lines {
    id
    publicCode
    name
    transportMode
  }
}
fragment situation on PtSituationElement {
  id
  description {
    value
    language
  }
  summary {
    value
    language
  }
}`) as unknown as TypedDocumentString<TGetQuayQuery, TGetQuayQueryVariables>
export const QuayNameQuery = new TypedDocumentString(`
    query QuayName($id: String!) {
  quay(id: $id) {
    name
    description
    publicCode
    id
  }
}
    `) as unknown as TypedDocumentString<
    TQuayNameQuery,
    TQuayNameQueryVariables
>
export const QuaysSearchQuery = new TypedDocumentString(`
    query quaysSearch($stopPlaceId: String!) {
  stopPlace(id: $stopPlaceId) {
    quays(filterByInUse: true) {
      id
      publicCode
      description
    }
  }
}
    `) as unknown as TypedDocumentString<
    TQuaysSearchQuery,
    TQuaysSearchQueryVariables
>
export const StopPlaceQuery = new TypedDocumentString(`
    query StopPlace($stopPlaceId: String!, $whitelistedTransportModes: [TransportMode], $whitelistedLines: [ID!]) {
  stopPlace(id: $stopPlaceId) {
    name
    transportMode
    estimatedCalls(
      numberOfDepartures: 20
      whiteListedModes: $whitelistedTransportModes
      whiteListed: {lines: $whitelistedLines}
    ) {
      ...departure
    }
  }
}
    fragment departure on EstimatedCall {
  quay {
    publicCode
  }
  destinationDisplay {
    frontText
    via
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
fragment situation on PtSituationElement {
  id
  description {
    value
    language
  }
  summary {
    value
    language
  }
}`) as unknown as TypedDocumentString<TStopPlaceQuery, TStopPlaceQueryVariables>
export const StopPlaceNameQuery = new TypedDocumentString(`
    query StopPlaceName($id: String!) {
  stopPlace(id: $id) {
    name
    id
  }
}
    `) as unknown as TypedDocumentString<
    TStopPlaceNameQuery,
    TStopPlaceNameQueryVariables
>
export const StopPlaceSettingsQuery = new TypedDocumentString(`
    query StopPlaceSettings($id: String!) {
  stopPlace(id: $id) {
    name
    quays(filterByInUse: true) {
      ...lines
    }
  }
}
    fragment lines on Quay {
  lines {
    id
    publicCode
    name
    transportMode
  }
}`) as unknown as TypedDocumentString<
    TStopPlaceSettingsQuery,
    TStopPlaceSettingsQueryVariables
>
