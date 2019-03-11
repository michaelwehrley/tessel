# Tessel2

To get my Tessel2 working...

[Install](http://tessel.github.io/t2-start/index.html): `$ npm install t2-cli -g`
Add Library: `$ npm install ambient-attx4`
Get [Online](http://tessel.github.io/t2-start/wifi.html): `$ t2 wifi -n [ssid] -p [password]`

### List (i.e., find)
```
$ t2 list
INFO Searching for nearby Tessels...
 	USB	Tessel-02A32D64394D	
 	LAN	Tessel-02A32D64394D	(USB connect and run `t2 provision` to authorize)
```
Note: [LAN](https://www.youtube.com/watch?v=LCj2HDOd_Mk) vs WAN
* Ethernet allows us connect multiple devices to form a LAN. Use a CAT5/ethernet cable

### Rename
```
$ t2 rename RobotLiam
INFO Looking for your Tessel...
INFO Connected to Tessel-02A32D64394D.
INFO Renaming Tessel-02A32D64394D to RobotLiam
INFO Changed name of device Tessel-02A32D64394D to RobotLiam
```

### Update
**[Firmware](https://en.wikipedia.org/wiki/Firmware)**: permanent software programmed into a read-only memory; i.e., television remote control.
```
$ t2 update
INFO Looking for your Tessel...
INFO Connected to RobotLiam.
INFO New firmware version found... 0.2.0
INFO Updating RobotLiam to latest version (0.2.0)...
INFO Downloading files...
INFO Download complete!
INFO Updating OpenWRT (1/2)
INFO Transferring image of size 16.78 MB. This will take 2-4 minutes...
INFO Transfer complete.
INFO Starting OpenWRT update.
INFO Please do not remove power from Tessel.
INFO This process will take at least 2 minutes...
INFO Configuration is saved during update.
INFO Updating firmware (2/2)
ERR! Detected CLI crash { Error: LIBUSB_TRANSFER_STALL errno: 4 } Error: LIBUSB_TRANSFER_STALL
INFO Firmware update complete!
INFO Updated RobotLiam from 0.0.12 to 0.2.0
```

### Provision (public and private keys)
- On Tessel 2, you can run and push your code over Wifi, not just USB. Let’s get that set up. Run:
```
$ t2 provision
INFO Looking for your Tessel...
INFO Connected to RobotLiam.
INFO Creating public and private keys for Tessel authentication...
INFO SSH Keys written.
INFO Authenticating Tessel with public key...
INFO Tessel authenticated with public key.
```

### List - compare to first time we ran `$ t2 list`
```
$ t2 list
INFO Searching for nearby Tessels...
  LAN RobotLiam 
  USB RobotLiam
```
`$ export TESSEL=RobotLiam` or put in `/.bash_profile`

After Working Helpful Commands:
* https://tessel.gitbooks.io/t2-docs/content/API/CLI.html#tessel-management
* When deploying code you can deploy over LAN or USB (`--lan` or `--usb`)

### Projects

1. http://tessel.github.io/t2-start/blinky.html