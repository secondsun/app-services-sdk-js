/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { TopicsToResetOffset } from './topics-to-reset-offset';

/**
 * 
 * @export
 * @interface ConsumerGroupResetOffsetParameters
 */
export interface ConsumerGroupResetOffsetParameters {
    /**
     * 
     * @type {string}
     * @memberof ConsumerGroupResetOffsetParameters
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof ConsumerGroupResetOffsetParameters
     */
    offset: ConsumerGroupResetOffsetParametersOffsetEnum;
    /**
     * 
     * @type {Array<TopicsToResetOffset>}
     * @memberof ConsumerGroupResetOffsetParameters
     */
    topics?: Array<TopicsToResetOffset>;
}

/**
    * @export
    * @enum {string}
    */
export enum ConsumerGroupResetOffsetParametersOffsetEnum {
    Timestamp = 'timestamp',
    Absolute = 'absolute',
    Latest = 'latest',
    Earliest = 'earliest'
}



