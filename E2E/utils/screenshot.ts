import path from "path";
import { addAttach } from "jest-html-reporters/helper";

export const screenshot = async ({ name = '', ...others }: { name: string }) => {
    const type = 'jpeg'
    const p = path.join(__dirname, '../screenshot', `${name}.${type}`);
    const page: any = global.page;
    const data = await page.screenshot({
        path: p,
        type,
        quality: 100,
        fullPage: true,
        omitBackground: true,
        ...others,
    });
    await addAttach(data, name, global);
}


