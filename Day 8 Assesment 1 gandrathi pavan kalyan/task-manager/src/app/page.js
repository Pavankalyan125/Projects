import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <main className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-center">Task Manager</h1>
      <AddTask />
      <TaskList />
    </main>
  );
}
