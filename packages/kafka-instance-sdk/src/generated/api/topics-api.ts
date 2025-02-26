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
import { NewTopicInput } from '../model';
// @ts-ignore
import { Topic } from '../model';
// @ts-ignore
import { TopicsList } from '../model';
// @ts-ignore
import { UpdateTopicInput } from '../model';
/**
 * TopicsApi - axios parameter creator
 * @export
 */
export const TopicsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new topic for Kafka.
         * @summary Creates a new topic
         * @param {NewTopicInput} newTopicInput Topic to create.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTopic: async (newTopicInput: NewTopicInput, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'newTopicInput' is not null or undefined
            assertParamExists('createTopic', 'newTopicInput', newTopicInput)
            const localVarPath = `/topics`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(newTopicInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the topic with the specified name.
         * @summary Deletes a  topic
         * @param {string} topicName The topic name to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTopic: async (topicName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'topicName' is not null or undefined
            assertParamExists('deleteTopic', 'topicName', topicName)
            const localVarPath = `/topics/{topicName}`
                .replace(`{${"topicName"}}`, encodeURIComponent(String(topicName)));
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
         * Topic
         * @summary Retrieves the topic with the specified name.
         * @param {string} topicName The topic name to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopic: async (topicName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'topicName' is not null or undefined
            assertParamExists('getTopic', 'topicName', topicName)
            const localVarPath = `/topics/{topicName}`
                .replace(`{${"topicName"}}`, encodeURIComponent(String(topicName)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all of the available topics, or the list of topics that meet the users URL Query Parameters.
         * @summary List of topics
         * @param {number} [offset] The page offset
         * @param {number} [limit] Maximum number of topics to return
         * @param {number} [size] Maximum number of topics to return on single page
         * @param {string} [filter] Filter to apply when returning the list of topics
         * @param {number} [page] The page when returning the limit of requested topics.
         * @param {'asc' | 'desc'} [order] Order of the items sorting. Ascending order is used as default.
         * @param {'name' | 'partitions' | 'retention.ms' | 'retention.bytes'} [orderKey] Order key to sort the topics by.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopics: async (offset?: number, limit?: number, size?: number, filter?: string, page?: number, order?: 'asc' | 'desc', orderKey?: 'name' | 'partitions' | 'retention.ms' | 'retention.bytes', options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/topics`;
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

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
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
         * updates the topic with the new data.
         * @summary Updates the topic with the specified name.
         * @param {string} topicName The topic name which is its unique id.
         * @param {UpdateTopicInput} updateTopicInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTopic: async (topicName: string, updateTopicInput: UpdateTopicInput, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'topicName' is not null or undefined
            assertParamExists('updateTopic', 'topicName', topicName)
            // verify required parameter 'updateTopicInput' is not null or undefined
            assertParamExists('updateTopic', 'updateTopicInput', updateTopicInput)
            const localVarPath = `/topics/{topicName}`
                .replace(`{${"topicName"}}`, encodeURIComponent(String(topicName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateTopicInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TopicsApi - functional programming interface
 * @export
 */
export const TopicsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TopicsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new topic for Kafka.
         * @summary Creates a new topic
         * @param {NewTopicInput} newTopicInput Topic to create.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTopic(newTopicInput: NewTopicInput, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Topic>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTopic(newTopicInput, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes the topic with the specified name.
         * @summary Deletes a  topic
         * @param {string} topicName The topic name to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTopic(topicName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTopic(topicName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Topic
         * @summary Retrieves the topic with the specified name.
         * @param {string} topicName The topic name to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTopic(topicName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Topic>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTopic(topicName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all of the available topics, or the list of topics that meet the users URL Query Parameters.
         * @summary List of topics
         * @param {number} [offset] The page offset
         * @param {number} [limit] Maximum number of topics to return
         * @param {number} [size] Maximum number of topics to return on single page
         * @param {string} [filter] Filter to apply when returning the list of topics
         * @param {number} [page] The page when returning the limit of requested topics.
         * @param {'asc' | 'desc'} [order] Order of the items sorting. Ascending order is used as default.
         * @param {'name' | 'partitions' | 'retention.ms' | 'retention.bytes'} [orderKey] Order key to sort the topics by.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTopics(offset?: number, limit?: number, size?: number, filter?: string, page?: number, order?: 'asc' | 'desc', orderKey?: 'name' | 'partitions' | 'retention.ms' | 'retention.bytes', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TopicsList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTopics(offset, limit, size, filter, page, order, orderKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * updates the topic with the new data.
         * @summary Updates the topic with the specified name.
         * @param {string} topicName The topic name which is its unique id.
         * @param {UpdateTopicInput} updateTopicInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTopic(topicName: string, updateTopicInput: UpdateTopicInput, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Topic>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTopic(topicName, updateTopicInput, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TopicsApi - factory interface
 * @export
 */
export const TopicsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TopicsApiFp(configuration)
    return {
        /**
         * Creates a new topic for Kafka.
         * @summary Creates a new topic
         * @param {NewTopicInput} newTopicInput Topic to create.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTopic(newTopicInput: NewTopicInput, options?: any): AxiosPromise<Topic> {
            return localVarFp.createTopic(newTopicInput, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the topic with the specified name.
         * @summary Deletes a  topic
         * @param {string} topicName The topic name to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTopic(topicName: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteTopic(topicName, options).then((request) => request(axios, basePath));
        },
        /**
         * Topic
         * @summary Retrieves the topic with the specified name.
         * @param {string} topicName The topic name to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopic(topicName: string, options?: any): AxiosPromise<Topic> {
            return localVarFp.getTopic(topicName, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all of the available topics, or the list of topics that meet the users URL Query Parameters.
         * @summary List of topics
         * @param {number} [offset] The page offset
         * @param {number} [limit] Maximum number of topics to return
         * @param {number} [size] Maximum number of topics to return on single page
         * @param {string} [filter] Filter to apply when returning the list of topics
         * @param {number} [page] The page when returning the limit of requested topics.
         * @param {'asc' | 'desc'} [order] Order of the items sorting. Ascending order is used as default.
         * @param {'name' | 'partitions' | 'retention.ms' | 'retention.bytes'} [orderKey] Order key to sort the topics by.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopics(offset?: number, limit?: number, size?: number, filter?: string, page?: number, order?: 'asc' | 'desc', orderKey?: 'name' | 'partitions' | 'retention.ms' | 'retention.bytes', options?: any): AxiosPromise<TopicsList> {
            return localVarFp.getTopics(offset, limit, size, filter, page, order, orderKey, options).then((request) => request(axios, basePath));
        },
        /**
         * updates the topic with the new data.
         * @summary Updates the topic with the specified name.
         * @param {string} topicName The topic name which is its unique id.
         * @param {UpdateTopicInput} updateTopicInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTopic(topicName: string, updateTopicInput: UpdateTopicInput, options?: any): AxiosPromise<Topic> {
            return localVarFp.updateTopic(topicName, updateTopicInput, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TopicsApi - interface
 * @export
 * @interface TopicsApi
 */
export interface TopicsApiInterface {
    /**
     * Creates a new topic for Kafka.
     * @summary Creates a new topic
     * @param {NewTopicInput} newTopicInput Topic to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopicsApiInterface
     */
    createTopic(newTopicInput: NewTopicInput, options?: any): AxiosPromise<Topic>;

    /**
     * Deletes the topic with the specified name.
     * @summary Deletes a  topic
     * @param {string} topicName The topic name to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopicsApiInterface
     */
    deleteTopic(topicName: string, options?: any): AxiosPromise<void>;

    /**
     * Topic
     * @summary Retrieves the topic with the specified name.
     * @param {string} topicName The topic name to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopicsApiInterface
     */
    getTopic(topicName: string, options?: any): AxiosPromise<Topic>;

    /**
     * Returns a list of all of the available topics, or the list of topics that meet the users URL Query Parameters.
     * @summary List of topics
     * @param {number} [offset] The page offset
     * @param {number} [limit] Maximum number of topics to return
     * @param {number} [size] Maximum number of topics to return on single page
     * @param {string} [filter] Filter to apply when returning the list of topics
     * @param {number} [page] The page when returning the limit of requested topics.
     * @param {'asc' | 'desc'} [order] Order of the items sorting. Ascending order is used as default.
     * @param {'name' | 'partitions' | 'retention.ms' | 'retention.bytes'} [orderKey] Order key to sort the topics by.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopicsApiInterface
     */
    getTopics(offset?: number, limit?: number, size?: number, filter?: string, page?: number, order?: 'asc' | 'desc', orderKey?: 'name' | 'partitions' | 'retention.ms' | 'retention.bytes', options?: any): AxiosPromise<TopicsList>;

    /**
     * updates the topic with the new data.
     * @summary Updates the topic with the specified name.
     * @param {string} topicName The topic name which is its unique id.
     * @param {UpdateTopicInput} updateTopicInput 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopicsApiInterface
     */
    updateTopic(topicName: string, updateTopicInput: UpdateTopicInput, options?: any): AxiosPromise<Topic>;

}

/**
 * TopicsApi - object-oriented interface
 * @export
 * @class TopicsApi
 * @extends {BaseAPI}
 */
export class TopicsApi extends BaseAPI implements TopicsApiInterface {
    /**
     * Creates a new topic for Kafka.
     * @summary Creates a new topic
     * @param {NewTopicInput} newTopicInput Topic to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopicsApi
     */
    public createTopic(newTopicInput: NewTopicInput, options?: any) {
        return TopicsApiFp(this.configuration).createTopic(newTopicInput, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the topic with the specified name.
     * @summary Deletes a  topic
     * @param {string} topicName The topic name to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopicsApi
     */
    public deleteTopic(topicName: string, options?: any) {
        return TopicsApiFp(this.configuration).deleteTopic(topicName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Topic
     * @summary Retrieves the topic with the specified name.
     * @param {string} topicName The topic name to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopicsApi
     */
    public getTopic(topicName: string, options?: any) {
        return TopicsApiFp(this.configuration).getTopic(topicName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all of the available topics, or the list of topics that meet the users URL Query Parameters.
     * @summary List of topics
     * @param {number} [offset] The page offset
     * @param {number} [limit] Maximum number of topics to return
     * @param {number} [size] Maximum number of topics to return on single page
     * @param {string} [filter] Filter to apply when returning the list of topics
     * @param {number} [page] The page when returning the limit of requested topics.
     * @param {'asc' | 'desc'} [order] Order of the items sorting. Ascending order is used as default.
     * @param {'name' | 'partitions' | 'retention.ms' | 'retention.bytes'} [orderKey] Order key to sort the topics by.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopicsApi
     */
    public getTopics(offset?: number, limit?: number, size?: number, filter?: string, page?: number, order?: 'asc' | 'desc', orderKey?: 'name' | 'partitions' | 'retention.ms' | 'retention.bytes', options?: any) {
        return TopicsApiFp(this.configuration).getTopics(offset, limit, size, filter, page, order, orderKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * updates the topic with the new data.
     * @summary Updates the topic with the specified name.
     * @param {string} topicName The topic name which is its unique id.
     * @param {UpdateTopicInput} updateTopicInput 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TopicsApi
     */
    public updateTopic(topicName: string, updateTopicInput: UpdateTopicInput, options?: any) {
        return TopicsApiFp(this.configuration).updateTopic(topicName, updateTopicInput, options).then((request) => request(this.axios, this.basePath));
    }
}
