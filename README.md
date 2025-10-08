README: FloatChat - AI-Powered Conversational Interface for ARGO Ocean Data Discovery and Visualization


Project Overview
FloatChat is a software solution developed by Quantum Solutions for the Smart India Hackathon 2025. The project addresses Problem Statement ID 25040, titled "FloatChat - AI-Powered Conversational Interface for ARGO Ocean Data Discovery and Visualization".

This solution aims to democratize access to ARGO ocean data by removing the technical barriers associated with complex file formats and querying languages. It enables scientists, students, and researchers to explore ocean data intuitively through an AI-powered conversational interface.

_______________________________________________________________________________________________

Key Features and Benefits:

* Removes Technical Barriers: Enables querying ARGO data through simple conversation, eliminating the need to master NetCDF or SQL.

* Intuitive Data Exploration: Provides an intuitive way to explore ARGO ocean data.

* Powerful Visualization: Converts complex ARGO data into clear mapped trajectories, depth-time plots, and profile comparisons on interactive dashboards.

* Scalable Platform: Designed to be a scalable platform that can integrate additional datasets or APIs for broader applications.

_______________________________________________________________________________________________

Technical Approach:
FloatChat employs a robust data pipeline and a conversational interface powered by a Large Language Model (LLM) and Retrieval-Augmented Generation (RAG).

Data Pipeline and Approach
The approach involves the following key steps:

1. Data Conversion: ARGO NetCDF files are converted into structured formats, such as SQL or Parquet.

2. RAG Enrichment: A RAG pipeline enriches natural language queries with metadata to improve query accuracy.

3. Query Translation: A Large Language Model (LLM) translates the enriched natural language queries into precise SQL commands.

4. Presentation: The results are then visualized on interactive dashboards.

_______________________________________________________________________________________________

Architecture Highlights:
* The process flow architecture utilizes the following components and libraries:
* Input Interface (Frontend): Built with HTML, CSS, Javascript, and React.js.

* Conversational Logic: Uses a RAG (Retrieval-Augmented Generation) block for Query Embedding, Vector Database Search, and Augmentation. Libraries include SQLAlchemy, a logging library, and a sys library.

* Query Generation: An LLM is used to generate the SQL Query.
* Database: PostgreSQL handles the Validation, Database Execution, and Result Fetching of the generated SQL query.

* Data Processing: Uses Pandas, Scikit-Learn, and JSON for Data Structuring and Reformatting, Filtering and Down sampling, and final conversion.

* Output Interface (Visualization): Implemented with React.js and Plotly.js.

_______________________________________________________________________________________________

