import client from './client';

async function getModels() {
    const { data } = await client({
        method: 'get',
        url: '/tables/all',
    });
    return data
}

async function syncModels() {
    const { data } = await client({
        method: 'get',
        url: '/tables/updateTables',
    });
    return data
}

async function index(model, field) {
    const { data } = await client({
        method: 'post',
        url: '/tables/index',
        data: { model, field }
    });
    return data
}

export default {
    getModels,
    syncModels,
    index
};
