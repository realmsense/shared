export interface IBotStatus {
    status: "Ready" | "Waiting" | "Walking" | "Error";
    guid: string;
    message: string;
    time: Date;
}