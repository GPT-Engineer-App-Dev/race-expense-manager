import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

function Index() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState("");

  const addExpense = () => {
    if (newExpense.trim() !== "") {
      setExpenses([...expenses, newExpense]);
      setNewExpense("");
    }
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div>
        <h1 className="text-3xl text-center">Expense Management Tool</h1>
        <p className="text-center">
          Manage your horse race expenses efficiently.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Add New Expense</CardTitle>
        </CardHeader>
        <CardContent>
          <input
            type="text"
            value={newExpense}
            onChange={(e) => setNewExpense(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter expense description"
          />
          <Button onClick={addExpense} className="mt-2">
            Add Expense
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Expenses List</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {expenses.map((expense, index) => (
              <li key={index} className="flex justify-between items-center">
                {expense}
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteExpense(index)}
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}

export default Index;