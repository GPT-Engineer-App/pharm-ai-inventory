import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Inventory = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Inventory Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Automated stock tracking, low stock alerts, and expiration date monitoring.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inventory;