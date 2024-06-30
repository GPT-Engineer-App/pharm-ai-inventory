import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Prescriptions = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Prescription Processing</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Basic drug interaction checking.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Prescriptions;