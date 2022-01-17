export interface IBotStatus {
    status: "Ready" | "Waiting" | "Moving" | "Error";
    name: string;
    message: string;
    time: Date;
}