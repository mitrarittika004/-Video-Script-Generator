import os
import requests
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Script
from .serializers import ScriptSerializer
from django.conf import settings

class ScriptViewSet(viewsets.ModelViewSet):
    queryset = Script.objects.all()
    serializer_class = ScriptSerializer

    @action(detail=False, methods=['post'])
    def generate(self, request):
        prompt = request.data.get('prompt')
        if not prompt:
            return Response({'error': 'Prompt is required'}, status=400)

        try:
            # Call x.ai API
            response = requests.post(
                'https://api.x.ai/v1/generate',
                headers={
                    'Authorization': f'Bearer {settings.XAI_API_KEY}',
                    'Content-Type': 'application/json'
                },
                json={'prompt': prompt}
            )
            response.raise_for_status()
            
            script_content = response.json()['text']
            
            # Save the generated script
            script = Script.objects.create(
                title=f"Video Script: {prompt[:50]}...",
                content=script_content,
                language='English'
            )
            
            return Response(ScriptSerializer(script).data)
        except Exception as e:
            return Response({'error': str(e)}, status=500)