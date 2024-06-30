import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Reports = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Simple Reporting</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Sales reports and inventory status.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;