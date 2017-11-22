import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';

import Material from './material.js';
import models from '../../models/index.js';

export default new GraphQLObjectType({
    name: 'store',
    description: 'store',
    fields () {
        return {
            id: {
                type: GraphQLID,
                description: "quote ID",
                resolve (stores) {
                    return stores.id;
                }
            },
            store_name: {
				type: GraphQLString,
				description: "author's name",
				resolve (store) {
					return store.store_name;
				}
            },
            location: {
                type: GraphQLString,
                description: "text",
                resolve (store) {
                    return store.location;
                }
            },
            description: {
				type: GraphQLString,
				description: "text",
				resolve (store) {
					return store.description;
				}
            }
        };
    }
});
