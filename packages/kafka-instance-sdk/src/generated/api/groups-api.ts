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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ConsumerGroup } from '../model';
// @ts-ignore
import { ConsumerGroupList } from '../model';
// @ts-ignore
import { ConsumerGroupResetOffsetParameters } from '../model';
// @ts-ignore
import { ConsumerGroupResetOffsetResult } from '../model';
/**
 * GroupsApi - axios parameter creator
 * @export
 */
export const GroupsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a consumer group, along with its consumers.
         * @summary Delete a consumer group.
         * @param {string} consumerGroupId The unique ID of the cobsumer group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteConsumerGroupById: async (consumerGroupId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'consumerGroupId' is not null or undefined
            assertParamExists('deleteConsumerGroupById', 'consumerGroupId', consumerGroupId)
            const localVarPath = `/consumer-groups/{consumerGroupId}`
                .replace(`{${"consumerGroupId"}}`, encodeURIComponent(String(consumerGroupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a single consumer group by its unique ID.
         * @param {string} consumerGroupId The unique ID of the consumer group
         * @param {'asc' | 'desc'} [order] Order of the items sorting. Ascending order is used as default.
         * @param {'offset' | 'endOffset' | 'lag' | 'partition'} [orderKey] Order key to sort the topics by.
         * @param {number} [partitionFilter] Value of partition to include. Value -1 means filter is not active.
         * @param {string} [topic] Filter consumer groups for a specific topic
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConsumerGroupById: async (consumerGroupId: string, order?: 'asc' | 'desc', orderKey?: 'offset' | 'endOffset' | 'lag' | 'partition', partitionFilter?: number, topic?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'consumerGroupId' is not null or undefined
            assertParamExists('getConsumerGroupById', 'consumerGroupId', consumerGroupId)
            const localVarPath = `/consumer-groups/{consumerGroupId}`
                .replace(`{${"consumerGroupId"}}`, encodeURIComponent(String(consumerGroupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (orderKey !== undefined) {
                localVarQueryParameter['orderKey'] = orderKey;
            }

            if (partitionFilter !== undefined) {
                localVarQueryParameter['partitionFilter'] = partitionFilter;
            }

            if (topic !== undefined) {
                localVarQueryParameter['topic'] = topic;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all consumer groups for a particular Kafka instance.
         * @summary List of consumer groups in the Kafka instance.
         * @param {number} [offset] The page offset
         * @param {number} [limit] Maximum number of consumer groups to return
         * @param {number} [size] Maximum number of consumer groups to return on single page
         * @param {number} [page] The page when returning the list of consumer groups
         * @param {string} [topic] Return consumer groups for this topic
         * @param {string} [groupIdFilter] Return the consumer groups where the ID begins with this value
         * @param {'asc' | 'desc'} [order] Order of the consumer groups sorting. Ascending order is used as default.
         * @param {'name'} [orderKey] Order key to sort the items by. Only the value \&#39;name\&#39; is currently applicable.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConsumerGroups: async (offset?: number, limit?: number, size?: number, page?: number, topic?: string, groupIdFilter?: string, order?: 'asc' | 'desc', orderKey?: 'name', options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/consumer-groups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (topic !== undefined) {
                localVarQueryParameter['topic'] = topic;
            }

            if (groupIdFilter !== undefined) {
                localVarQueryParameter['group-id-filter'] = groupIdFilter;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (orderKey !== undefined) {
                localVarQueryParameter['orderKey'] = orderKey;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reset the offset for a particular consumer group.
         * @summary Reset the offset for a consumer group.
         * @param {string} consumerGroupId The ID of the consumer group.
         * @param {ConsumerGroupResetOffsetParameters} consumerGroupResetOffsetParameters 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetConsumerGroupOffset: async (consumerGroupId: string, consumerGroupResetOffsetParameters: ConsumerGroupResetOffsetParameters, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'consumerGroupId' is not null or undefined
            assertParamExists('resetConsumerGroupOffset', 'consumerGroupId', consumerGroupId)
            // verify required parameter 'consumerGroupResetOffsetParameters' is not null or undefined
            assertParamExists('resetConsumerGroupOffset', 'consumerGroupResetOffsetParameters', consumerGroupResetOffsetParameters)
            const localVarPath = `/consumer-groups/{consumerGroupId}/reset-offset`
                .replace(`{${"consumerGroupId"}}`, encodeURIComponent(String(consumerGroupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(consumerGroupResetOffsetParameters, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupsApi - functional programming interface
 * @export
 */
export const GroupsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a consumer group, along with its consumers.
         * @summary Delete a consumer group.
         * @param {string} consumerGroupId The unique ID of the cobsumer group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteConsumerGroupById(consumerGroupId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteConsumerGroupById(consumerGroupId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get a single consumer group by its unique ID.
         * @param {string} consumerGroupId The unique ID of the consumer group
         * @param {'asc' | 'desc'} [order] Order of the items sorting. Ascending order is used as default.
         * @param {'offset' | 'endOffset' | 'lag' | 'partition'} [orderKey] Order key to sort the topics by.
         * @param {number} [partitionFilter] Value of partition to include. Value -1 means filter is not active.
         * @param {string} [topic] Filter consumer groups for a specific topic
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConsumerGroupById(consumerGroupId: string, order?: 'asc' | 'desc', orderKey?: 'offset' | 'endOffset' | 'lag' | 'partition', partitionFilter?: number, topic?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConsumerGroup>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConsumerGroupById(consumerGroupId, order, orderKey, partitionFilter, topic, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all consumer groups for a particular Kafka instance.
         * @summary List of consumer groups in the Kafka instance.
         * @param {number} [offset] The page offset
         * @param {number} [limit] Maximum number of consumer groups to return
         * @param {number} [size] Maximum number of consumer groups to return on single page
         * @param {number} [page] The page when returning the list of consumer groups
         * @param {string} [topic] Return consumer groups for this topic
         * @param {string} [groupIdFilter] Return the consumer groups where the ID begins with this value
         * @param {'asc' | 'desc'} [order] Order of the consumer groups sorting. Ascending order is used as default.
         * @param {'name'} [orderKey] Order key to sort the items by. Only the value \&#39;name\&#39; is currently applicable.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConsumerGroups(offset?: number, limit?: number, size?: number, page?: number, topic?: string, groupIdFilter?: string, order?: 'asc' | 'desc', orderKey?: 'name', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConsumerGroupList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConsumerGroups(offset, limit, size, page, topic, groupIdFilter, order, orderKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Reset the offset for a particular consumer group.
         * @summary Reset the offset for a consumer group.
         * @param {string} consumerGroupId The ID of the consumer group.
         * @param {ConsumerGroupResetOffsetParameters} consumerGroupResetOffsetParameters 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetConsumerGroupOffset(consumerGroupId: string, consumerGroupResetOffsetParameters: ConsumerGroupResetOffsetParameters, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConsumerGroupResetOffsetResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetConsumerGroupOffset(consumerGroupId, consumerGroupResetOffsetParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsApi - factory interface
 * @export
 */
export const GroupsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsApiFp(configuration)
    return {
        /**
         * Delete a consumer group, along with its consumers.
         * @summary Delete a consumer group.
         * @param {string} consumerGroupId The unique ID of the cobsumer group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteConsumerGroupById(consumerGroupId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteConsumerGroupById(consumerGroupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a single consumer group by its unique ID.
         * @param {string} consumerGroupId The unique ID of the consumer group
         * @param {'asc' | 'desc'} [order] Order of the items sorting. Ascending order is used as default.
         * @param {'offset' | 'endOffset' | 'lag' | 'partition'} [orderKey] Order key to sort the topics by.
         * @param {number} [partitionFilter] Value of partition to include. Value -1 means filter is not active.
         * @param {string} [topic] Filter consumer groups for a specific topic
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConsumerGroupById(consumerGroupId: string, order?: 'asc' | 'desc', orderKey?: 'offset' | 'endOffset' | 'lag' | 'partition', partitionFilter?: number, topic?: string, options?: any): AxiosPromise<ConsumerGroup> {
            return localVarFp.getConsumerGroupById(consumerGroupId, order, orderKey, partitionFilter, topic, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all consumer groups for a particular Kafka instance.
         * @summary List of consumer groups in the Kafka instance.
         * @param {number} [offset] The page offset
         * @param {number} [limit] Maximum number of consumer groups to return
         * @param {number} [size] Maximum number of consumer groups to return on single page
         * @param {number} [page] The page when returning the list of consumer groups
         * @param {string} [topic] Return consumer groups for this topic
         * @param {string} [groupIdFilter] Return the consumer groups where the ID begins with this value
         * @param {'asc' | 'desc'} [order] Order of the consumer groups sorting. Ascending order is used as default.
         * @param {'name'} [orderKey] Order key to sort the items by. Only the value \&#39;name\&#39; is currently applicable.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConsumerGroups(offset?: number, limit?: number, size?: number, page?: number, topic?: string, groupIdFilter?: string, order?: 'asc' | 'desc', orderKey?: 'name', options?: any): AxiosPromise<ConsumerGroupList> {
            return localVarFp.getConsumerGroups(offset, limit, size, page, topic, groupIdFilter, order, orderKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Reset the offset for a particular consumer group.
         * @summary Reset the offset for a consumer group.
         * @param {string} consumerGroupId The ID of the consumer group.
         * @param {ConsumerGroupResetOffsetParameters} consumerGroupResetOffsetParameters 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetConsumerGroupOffset(consumerGroupId: string, consumerGroupResetOffsetParameters: ConsumerGroupResetOffsetParameters, options?: any): AxiosPromise<ConsumerGroupResetOffsetResult> {
            return localVarFp.resetConsumerGroupOffset(consumerGroupId, consumerGroupResetOffsetParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsApi - interface
 * @export
 * @interface GroupsApi
 */
export interface GroupsApiInterface {
    /**
     * Delete a consumer group, along with its consumers.
     * @summary Delete a consumer group.
     * @param {string} consumerGroupId The unique ID of the cobsumer group.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApiInterface
     */
    deleteConsumerGroupById(consumerGroupId: string, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Get a single consumer group by its unique ID.
     * @param {string} consumerGroupId The unique ID of the consumer group
     * @param {'asc' | 'desc'} [order] Order of the items sorting. Ascending order is used as default.
     * @param {'offset' | 'endOffset' | 'lag' | 'partition'} [orderKey] Order key to sort the topics by.
     * @param {number} [partitionFilter] Value of partition to include. Value -1 means filter is not active.
     * @param {string} [topic] Filter consumer groups for a specific topic
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApiInterface
     */
    getConsumerGroupById(consumerGroupId: string, order?: 'asc' | 'desc', orderKey?: 'offset' | 'endOffset' | 'lag' | 'partition', partitionFilter?: number, topic?: string, options?: any): AxiosPromise<ConsumerGroup>;

    /**
     * Returns a list of all consumer groups for a particular Kafka instance.
     * @summary List of consumer groups in the Kafka instance.
     * @param {number} [offset] The page offset
     * @param {number} [limit] Maximum number of consumer groups to return
     * @param {number} [size] Maximum number of consumer groups to return on single page
     * @param {number} [page] The page when returning the list of consumer groups
     * @param {string} [topic] Return consumer groups for this topic
     * @param {string} [groupIdFilter] Return the consumer groups where the ID begins with this value
     * @param {'asc' | 'desc'} [order] Order of the consumer groups sorting. Ascending order is used as default.
     * @param {'name'} [orderKey] Order key to sort the items by. Only the value \&#39;name\&#39; is currently applicable.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApiInterface
     */
    getConsumerGroups(offset?: number, limit?: number, size?: number, page?: number, topic?: string, groupIdFilter?: string, order?: 'asc' | 'desc', orderKey?: 'name', options?: any): AxiosPromise<ConsumerGroupList>;

    /**
     * Reset the offset for a particular consumer group.
     * @summary Reset the offset for a consumer group.
     * @param {string} consumerGroupId The ID of the consumer group.
     * @param {ConsumerGroupResetOffsetParameters} consumerGroupResetOffsetParameters 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApiInterface
     */
    resetConsumerGroupOffset(consumerGroupId: string, consumerGroupResetOffsetParameters: ConsumerGroupResetOffsetParameters, options?: any): AxiosPromise<ConsumerGroupResetOffsetResult>;

}

/**
 * GroupsApi - object-oriented interface
 * @export
 * @class GroupsApi
 * @extends {BaseAPI}
 */
export class GroupsApi extends BaseAPI implements GroupsApiInterface {
    /**
     * Delete a consumer group, along with its consumers.
     * @summary Delete a consumer group.
     * @param {string} consumerGroupId The unique ID of the cobsumer group.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public deleteConsumerGroupById(consumerGroupId: string, options?: any) {
        return GroupsApiFp(this.configuration).deleteConsumerGroupById(consumerGroupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a single consumer group by its unique ID.
     * @param {string} consumerGroupId The unique ID of the consumer group
     * @param {'asc' | 'desc'} [order] Order of the items sorting. Ascending order is used as default.
     * @param {'offset' | 'endOffset' | 'lag' | 'partition'} [orderKey] Order key to sort the topics by.
     * @param {number} [partitionFilter] Value of partition to include. Value -1 means filter is not active.
     * @param {string} [topic] Filter consumer groups for a specific topic
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public getConsumerGroupById(consumerGroupId: string, order?: 'asc' | 'desc', orderKey?: 'offset' | 'endOffset' | 'lag' | 'partition', partitionFilter?: number, topic?: string, options?: any) {
        return GroupsApiFp(this.configuration).getConsumerGroupById(consumerGroupId, order, orderKey, partitionFilter, topic, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all consumer groups for a particular Kafka instance.
     * @summary List of consumer groups in the Kafka instance.
     * @param {number} [offset] The page offset
     * @param {number} [limit] Maximum number of consumer groups to return
     * @param {number} [size] Maximum number of consumer groups to return on single page
     * @param {number} [page] The page when returning the list of consumer groups
     * @param {string} [topic] Return consumer groups for this topic
     * @param {string} [groupIdFilter] Return the consumer groups where the ID begins with this value
     * @param {'asc' | 'desc'} [order] Order of the consumer groups sorting. Ascending order is used as default.
     * @param {'name'} [orderKey] Order key to sort the items by. Only the value \&#39;name\&#39; is currently applicable.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public getConsumerGroups(offset?: number, limit?: number, size?: number, page?: number, topic?: string, groupIdFilter?: string, order?: 'asc' | 'desc', orderKey?: 'name', options?: any) {
        return GroupsApiFp(this.configuration).getConsumerGroups(offset, limit, size, page, topic, groupIdFilter, order, orderKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reset the offset for a particular consumer group.
     * @summary Reset the offset for a consumer group.
     * @param {string} consumerGroupId The ID of the consumer group.
     * @param {ConsumerGroupResetOffsetParameters} consumerGroupResetOffsetParameters 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public resetConsumerGroupOffset(consumerGroupId: string, consumerGroupResetOffsetParameters: ConsumerGroupResetOffsetParameters, options?: any) {
        return GroupsApiFp(this.configuration).resetConsumerGroupOffset(consumerGroupId, consumerGroupResetOffsetParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
