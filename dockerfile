FROM debian:bookworm

RUN sudo apt install git npm nvm -y
RUN sudo npm install -g @sveltejs/kit
RUN sudo npm install -g daisyui
RUN git clone https://github.com/koyot-digital/wiki.git
WORKDIR /wiki
RUN npm install
# Download and install nvm, Node.js version 24, and verify installations
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash && \
    . "$HOME/.nvm/nvm.sh" && \
    nvm install 24 && \
    node -v && \
    npm -v

EXPOSE 5173
CMD npm run dev -- --host
