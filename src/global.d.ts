export {};

declare global {
  interface Todo {
    id: string;
    text: string;
    complete: boolean;
  }
}
