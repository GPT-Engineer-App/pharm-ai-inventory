import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Patients = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Patient Records</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Simple patient profiles and medication history.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Patients;