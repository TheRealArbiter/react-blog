const trendingPosts = require('./mocks/trending')
const featuredPosts = require('./mocks/featured')
const fs =  require('fs')
const path = require('path')

module.exports = {
    //resolvers tells the server what is going to process
        resolvers: {
            //resolvers uses a query to an api to request the data
            Query:{
                trendingPosts: () => trendingPosts,
                featuredPosts: () => featuredPosts,
                recentPosts: () => [
                    ...trendingPosts,
                    ...feturedPosts,
                    ...feturedPosts
                ]
            }
        },
        //schema tells the app.js how is going to process the data passed as a resolver
        schema: fs.readFileSync(
            path.resolve(
                __dirname,
                './posts-schema.graphql'
            )
        ).toString()
}