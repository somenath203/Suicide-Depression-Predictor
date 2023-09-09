FROM python:3.11.2


WORKDIR /app


COPY requirements.txt /app/


RUN pip install -r requirements.txt


COPY . /app/


EXPOSE 1000


CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "1000"]