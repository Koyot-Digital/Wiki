echo"This script will download a lot of files from the internet, this might take up a lot of your bandwidth and storage."
echo "Runing dev setup script in"
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
node ./scripts/busts.js
node run ./scripts/fetchBadges.js
node run ./scripts/busts.js
npm install
echo ""
echo "Dev setup done!"
echo ""
echo "To start the development server, run 'npm run dev'"