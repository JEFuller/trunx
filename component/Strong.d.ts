import * as React from "react";
import { IBackgroundColorHelpersProps, ITextColorHelpersProps } from "./modifiers";
interface IStrongProps extends IBackgroundColorHelpersProps, ITextColorHelpersProps {
}
export default class Strong extends React.Component<IStrongProps> {
    render(): JSX.Element;
}
export {};
