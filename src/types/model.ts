export interface IProject {
   id: number;
   title: string;
}

export interface ITaskBoard {
   created_at: string;
   id: number;
   index: number;
   title: string;
}

export interface ITaskItem {
   created_at: string;
   id: number;
   index: number;
   taskBoardId: number;
   title: string;
}
