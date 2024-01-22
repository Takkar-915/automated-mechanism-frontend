import { Select, Option } from "@material-tailwind/react";

export const SelectMenu = () => {
    return (
        <div className="w-72">
            <Select label="Select Version" placeholder="">
                <Option>Horizon UI HTML</Option>
                <Option>Horizon UI React</Option>
                <Option>Horizon UI Vue</Option>
                <Option>Horizon UI Angular</Option>
                <Option>Horizon UI Svelte</Option>
            </Select>
        </div>
        // <div className="flex flex-col w-72 gap-6">
        //     <Select size="md" label="Select Version" placeholder="">
        //         <Option>Horizon UI HTML</Option>
        //         <Option>Horizon UI React</Option>
        //         <Option>Horizon UI Vue</Option>
        //         <Option>Horizon UI Angular</Option>
        //         <Option>Horizon UI Svelte</Option>
        //     </Select>
        //     <Select size="lg" label="入札のタイミングによる損得" placeholder="">
        //         <Option>はやいほど得をする</Option>
        //         <Option>タイミングによる損得は考慮しない</Option>
        //     </Select>
        // </div>
    );
} 