import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sales = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Point of Sale</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Basic sales processing and integration with inventory.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sales;