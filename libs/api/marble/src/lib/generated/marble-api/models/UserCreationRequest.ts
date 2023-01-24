/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserCreationRequest
 */
export interface UserCreationRequest {
    /**
     * 
     * @type {string}
     * @memberof UserCreationRequest
     */
    orgId: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreationRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreationRequest
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreationRequest
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreationRequest
     */
    preferredLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreationRequest
     */
    profilePictureUrl?: string;
}

/**
 * Check if a given object implements the UserCreationRequest interface.
 */
export function instanceOfUserCreationRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "orgId" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "lastName" in value;

    return isInstance;
}

export function UserCreationRequestFromJSON(json: any): UserCreationRequest {
    return UserCreationRequestFromJSONTyped(json, false);
}

export function UserCreationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserCreationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orgId': json['org_id'],
        'email': json['email'],
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'preferredLanguage': !exists(json, 'preferred_language') ? undefined : json['preferred_language'],
        'profilePictureUrl': !exists(json, 'profile_picture_url') ? undefined : json['profile_picture_url'],
    };
}

export function UserCreationRequestToJSON(value?: UserCreationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'org_id': value.orgId,
        'email': value.email,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'preferred_language': value.preferredLanguage,
        'profile_picture_url': value.profilePictureUrl,
    };
}
