/**
 * track controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::track.track', ({strapi}) => ({
    async findOne(ctx) {
        const { id } = ctx.params
        const entity = await strapi.db.query('api::track.track').findOne({ 
            where: { slug: id },
            populate: ['title', 'artist', 'album'],
        })

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
        return this.transformResponse(sanitizedEntity)
    }
    })
);
