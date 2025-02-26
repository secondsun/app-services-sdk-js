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


import { ConfigEntry } from './config-entry';

/**
 * Kafka Topic (A feed where records are stored and published)
 * @export
 * @interface UpdateTopicInput
 */
export interface UpdateTopicInput {
    /**
     * Topic configuration entries.
     * @type {Array<ConfigEntry>}
     * @memberof UpdateTopicInput
     */
    config?: Array<ConfigEntry>;
    /**
     * Number of partitions (only increasing supported)
     * @type {number}
     * @memberof UpdateTopicInput
     */
    numPartitions?: number;
}


