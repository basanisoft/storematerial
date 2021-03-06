import {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Store from '../../types/store.js';

export default {
    type: Store,
	        args: {
				  store_name: {type: new GraphQLNonNull(GraphQLString)},
		          location:{ type: new GraphQLNonNull(GraphQLString)  },
		          description:{ type: new GraphQLNonNull(GraphQLString)  },
	        },
	        resolve(root,args) {
			        return models.store.create({
					            store_name: args.store_name,
								location: args.location,
								description: args.description
							});
    		}
};
