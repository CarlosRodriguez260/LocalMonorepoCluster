FROM python:3.13
WORKDIR /src

COPY src/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY src/ .
EXPOSE 80

CMD ["fastapi", "run", "--host", "0.0.0.0", "--port", "80"]