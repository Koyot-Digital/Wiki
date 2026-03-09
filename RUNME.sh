# !/bin/bash
echo "This script will download a lot of files from the internet, this might take up a lot of your bandwidth and storage.${RESET}"
echo "Running dev setup script in"
echo -n "3"
sleep 0.25
echo -n "."
sleep 0.25
echo -n "."
sleep 0.25
echo -n "."
sleep 0.25
echo -n "2"
sleep 0.25
echo -n "."
sleep 0.25
echo -n "."
sleep 0.25
echo -n "."
sleep 0.25
echo -n "1"
sleep 0.25
echo -n "."
sleep 0.25
echo -n "."
sleep 0.25
echo -n "."
sleep 0.25
echo -n "."
echo ""
echo "Starting dev setup script..."
echo ""
echo "Installing dependencies..."
npm install
echo "Dependencies installed."
echo ""
echo "Fetching images from roblox..."
node ./scripts/busts.js
node ./scripts/fetchBadges.js
echo "Done fetching images from roblox."
echo ""
echo "Dev setup done!"
echo ""
echo "To start the development server, run 'npm run dev'"