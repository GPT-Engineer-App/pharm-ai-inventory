import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to the Pharmacy Management System</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This system helps you manage your pharmacy efficiently with features like inventory management, prescription processing, patient records, point of sale, AI-powered dosage recommendations, and simple reporting.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;