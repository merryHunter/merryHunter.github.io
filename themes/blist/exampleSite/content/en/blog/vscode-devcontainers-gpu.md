---
author: "Ivan Chernukha"
title: "VSCode and DevContainers setup for open-source development"
date: 2024-09-26
description: "Setting up an environment for any repository"
tags: ["llm", "development"]
thumbnail: https://external-preview.redd.it/mtVY03ncqXzS7dd1n4lCBmln4S2fUcinItKmZsjYevw.jpg?auto=webp&s=6be641ef3ec9b69c7d56bd16309c9f442efcd870
---

Recently I got a Windows based Lenovo laptop with RTX 4090 and it was a time to figure out the best development setup for ML and LLM development, especially as I wanted to try and modify open-source libraries.   
So if you struggle with reusing same environment for different projects, or wanna save on time for enviornment rebuild, here is my setup with VSCode and DevContainers that I use. Sometimes I may need to switch to WSL, but generally, DevContainers don't have problems or invonveniances at all.

My only preference is to avoid using "Open Folder in Container" (as it's slow and upredictable), but instead, I am using option "Attach to a running container...". Let's dive into this.

## Instruction

1. Place Dockerfile in the working repository (dockerfile template is below). Modify lines for pip install to install packages required for repo development (I like to install all required packages to save time during development).
2.Build Docker image: `docker build -t devimage`  
3. Run docker in a detached mode. Mount current directory(!), pass gpu flag and optionally expose port: 
 ```
 docker.exe run --rm -dit --gpus=all -v ${PWD}:/workspace -p 8887:8887 --ipc=host devimage:latest
 ```  
4. In VScode, Install extension 'Dev Containers'. Then, press `Ctrl + p` -> type `> Dev Containers: Attach to Running Container...` -> Select newly created container.   
5. At just created window by VSCode, open '/workspace' folder.  
6. Now you can update code, rebuild packages, download files, etc with a fully isolated environment!
    

## Dockerfile
```lang-sh
# Use the official Ubuntu base image
FROM ubuntu:20.04

# Set environment variables to non-interactive
ENV DEBIAN_FRONTEND=noninteractive

# Install necessary dependencies
RUN apt-get update && apt-get install -y \
    software-properties-common \
    && add-apt-repository ppa:deadsnakes/ppa \
    && apt-get update && apt-get install -y \
    python3.10 \
    python3.10-dev \
    python3.10-distutils \
    build-essential \
    cmake \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Update alternatives to set python3.10 as the default python3
RUN update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.10 1

# Install pip for Python 3.10
RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && python3.10 get-pip.py && rm get-pip.py
RUN pip install --upgrade pip
# Set the working directory
WORKDIR /workspace

# Copy the current directory contents into the container at /workspace
COPY pyproject.toml /workspace

# Install any additional Python dependencies
RUN pip install .[all,test]

# Command to run when the container starts
CMD ["bash"]
```

## Bonus section

Hope you find it useful! As a bonus, use `docker exec` command to ssh into container:  
```
docker exec -it <container_id> /bin/bash
```

---


{{< css.inline >}}

<style>
.emojify {
	font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
	font-size: 2rem;
	vertical-align: middle;
}
@media screen and (max-width:650px) {
  .nowrap {
    display: block;
    margin: 25px 0;
  }
}
</style>

{{< /css.inline >}}
