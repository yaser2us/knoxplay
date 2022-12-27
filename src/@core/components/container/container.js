import React from "react"
import { ContainerTemplate as ContainerList } from "./template";

const Container = (props) => {
    const { item } = props;

    const { templateName = 'defaultContainer' } = item;
    const renderTemplate = () => {
        const ContainerTemplate = (ContainerList[templateName] && ContainerList[templateName](props)) || null;
        console.log(templateName, "ContainerContainer", ContainerTemplate)
        return ContainerTemplate;
    };

    return renderTemplate();
};

export default Container;