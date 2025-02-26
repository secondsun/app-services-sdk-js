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



/**
 * 
 * @export
 * @interface TopicsToResetOffset
 */
export interface TopicsToResetOffset {
    /**
     * 
     * @type {string}
     * @memberof TopicsToResetOffset
     */
    topic: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof TopicsToResetOffset
     */
    partitions?: Array<number>;
}


