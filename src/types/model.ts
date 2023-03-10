export interface IProject {
   deadlinedate: string | null;
   description: string | null;
   id: number;
   title: string | null;
}

export interface TaskItemModel {
   id: number;
   title: string;
}
