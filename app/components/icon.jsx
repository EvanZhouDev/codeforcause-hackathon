import * as SolidIcons from '@heroicons/react/24/solid'
import * as OutlineIcons from '@heroicons/react/24/outline'
let getIconID = (name) => name.charAt(0).toUpperCase() + name.slice(1) + "Icon";
export default {
    Outlined: ({ name, className }) => {
        let OutlineIcon = OutlineIcons[getIconID(name)];
        return <OutlineIcon className={`w-6 h-6 ${className} stroke-2`} />;
    },
    Solid: ({ name, className }) => {
        let SolidIcon = SolidIcons[getIconID(name)];
        return <SolidIcon className={`w-6 h-6 ${className}`} />;
    },
}