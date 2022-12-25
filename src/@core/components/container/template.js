import { Default } from "./Default";
import { CardContainer } from "./Card";

const ContainerTemplate = {
    "defaultContainer": (props) => <Default {...props} />,
    "cardContainer": (props) => <CardContainer {...props} />,
}

export {
    ContainerTemplate
};