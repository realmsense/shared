export interface IBotStatus {
    status: "Ready" | "Waiting" | "Moving" | "Error";
    guid: string;
    message: string;
    time: Date;
}