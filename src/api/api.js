import client from './client';
import { message } from "antd";

export default {
    async getModels() {
        const { data } = await client({
            method: 'get',
            url: '/tables',
        });
        return data
    },
    async getElasticIndexes() { // TODO to be used to show all indexed available in elastic in search page
        const { data } = await client({
            method: 'get',
            url: '/tables/elastic/indexes',
        });
        return data
    },
    async getModelByModelName(modelName) {
        const { data } = await client({
            method: 'get',
            url: `/tables/${modelName}`,
        });
        return data
    },
    async syncModels() {
        const { data } = await client({
            method: 'get',
            url: '/tables/updateTables',
        });
        return data
    },

    async startRabbit() {
        const { data } = await client({
            method: 'get',
            url: '/startrabbit',
        });
        return data
    },

    async index(model, field) {
        const { data } = await client({
            method: 'post',
            url: '/tables/index',
            data: { model, field }
        });
        return data
    },
    async importDataFromDbAndStoreInElastic(model) {
        const { data } = await client({
            method: 'get',
            url: `/import/${model}`,
        });
        return data
    },
    async deleteIndex(index) {
        const { data } = await client({
            method: 'delete',
            url: `/tables/${index}`
        });
        return data
    },

    async search(index, query) {
        try {
            const res = await client({
                method: 'get',
                url: `/tables/search/${index}?query=${query}`,
            })
            return res.data
        } catch (e) {
            console.log('error in search', e)
            if (e.response?.status===404) {
                message.error('ایندکس مورد نظر پیدا نشد')
            }

        }

    }
}

