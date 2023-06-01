import {config} from 'dotenv';
import {createApp} from "./utils/createApp";

config();

const PORT = process.env.PORT || 5000;


async function main() {
    console.log(`Running in ${process.env.ENVIRONMENT} mode`);
    try {
        const app = createApp();
        app.listen(PORT, () => console.log(`BACK-END running and listen PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

main().then()