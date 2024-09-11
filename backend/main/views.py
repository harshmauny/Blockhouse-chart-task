from rest_framework.views import APIView
from rest_framework.response import Response

class CandlestickDataView(APIView):
    def get(self, request):
        data = {
            "data": [
                {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
                {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
                {"x": "2023-01-03", "open": 40, "high": 50, "low": 35, "close": 45},
            ]
        }
        return Response(data)

class LineChartDataView(APIView):
    def get(self, request):
        data = {
            "labels": ["Jan", "Feb", "Mar", "Apr"],
            "data": [10, 20, 30, 40]
        }
        return Response(data)

class BarChartDataView(APIView):
    def get(self, request):
        data = {
            "labels": ["Product A", "Product B", "Product C"],
            "data": [100, 150, 200]
        }
        return Response(data)

class PieChartDataView(APIView):
    def get(self, request):
        data = {
            "labels": ["Red", "Blue", "Yellow"],
            "data": [300, 50, 100]
        }
        return Response(data)
