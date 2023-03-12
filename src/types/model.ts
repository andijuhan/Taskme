export interface IProject {
   deadlinedate: string | null;
   description: string | null;
   id: number;
   title: string | null;
}

export interface TaskItemModel {
   created_at: string | null;
   id: number;
   index: number;
   projectId: number | null;
   taskId: number | null;
   title: string | null;
}

export interface TaskModel {
   created_at: string | null;
   id: number;
   index: number | null;
   projectId: number | null;
   title: string | null;
}
