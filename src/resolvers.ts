import fetch from 'node-fetch';
import { GraphQLObjectType, } from 'graphql';

/**
 * Retreives the asset from the URL.
 *
 * @param {string} url - URL string of the resource
 * @return {Promise<GraphQLObjectType>} - Asset
 */
async function getAssetByURL(url: string): Promise<GraphQLObjectType> {
  const res = await fetch(url);
  const json = await res.json();

  return json;
}

/**
 * Retreives the id of a resource from the resource's URL.
 *
 * @param {string} type - Plural form of resource type.
 * @param {string} url - String from which resource ID can be found.
 * @return {string|null} id (if found).
 */
async function getIDFromURL(type: string, url: string): Promise<string|null> {
  const re = new RegExp('\\/' + type + '\\/(\\d+)');
  const matches = re.exec(url);
  let id = null;

  if (matches) id = matches[1];

  return id;
}

export { getAssetByURL, getIDFromURL };
