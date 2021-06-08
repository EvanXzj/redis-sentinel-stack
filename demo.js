const Redis = require('ioredis');
const redis = new Redis({
    sentinels:[
        { host: 'redis-sentinel-1', port: 26379 },
        { host: 'redis-sentinel-2', port: 26380 },
        { host: 'redis-sentinel-3', port: 26381 },
    ],
    name: 'mymaster',
});

let count = 0;
setInterval(async function() {
    count++;
    const key = `k_${count}`;

    try {
        await redis.set(key, count);
        const result = await redis.get(key)
        console.log(key, result);
    } catch (err) {
        console.error(err);
    }
}, 5000)
