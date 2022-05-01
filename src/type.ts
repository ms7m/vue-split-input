export type SplitInputType = {
 values: any;
 index?: any;
};

export interface Prop extends Partial<HTMLInputElement> {
 modelValue?: string;
 inputNumber: number;
 placeholders?: string[] | undefined[] | unknown[];
 seperator: string;
 showSeperator: boolean;
 manuallySpecifySeperator: number[];
 type: string;
 clearAllInput?: () => void;
}
