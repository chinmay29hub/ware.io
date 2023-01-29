from flask import Flask, render_template
import cv2
import numpy as np
from flask import jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
	#Load YOLO
	net = cv2.dnn.readNet('yolov3-tiny.weights', 'yolov3.cfg')
	classes = []
	with open("coco.names","r") as f:
		classes = [line.strip() for line in f.readlines()]
	layer_names = net.getLayerNames()
	output_layers = [layer_names[i - 1] for i in net.getUnconnectedOutLayers()]
	colors= np.random.uniform(0,255,size=(len(classes),3))
	# loading image
	img = cv2.imread("image2.JPG")
	
	img = cv2.resize(img,None,fx=0.4,fy=0.3)
	height,width,channels = img.shape
	
	#detecting objects
	blob = cv2.dnn.blobFromImage(img,0.00392,(416,416),(0,0,0),True,crop=False)
	net.setInput(blob)
	outs = net.forward(output_layers)
	#Showing info on screen/ get confidence score of algorithm in detecting an object in blob
	class_ids=[]
	confidences=[]
	boxes=[]
	for out in outs:
	    for detection in out:
	        scores = detection[5:]
	        class_id = np.argmax(scores)
	        confidence = scores[class_id]
	        if confidence > 0.5:
	            #onject detected
	            confidences.append(float(confidence))
	            center_x= int(detection[0]*width)
	            center_y= int(detection[1]*height)
	            w = int(detection[2]*width)
	            h = int(detection[3]*height)
				#class_ids.append(class_id)
	            cv2.circle(img,(center_x,center_y),10,(0,255,0),2)
	            #rectangle co-ordinaters
	            x=int(center_x - w/2)
	            y=int(center_y - h/2)
	            boxes.append([x,y,w,h])
	            class_ids.append(class_id)
	             #put all rectangle areas
				#confidences.append(float(confidence))#how confidence was that object detected and show that percentage
				#class_ids.append(class_id) #name of the object tha was detected
	indexes = cv2.dnn.NMSBoxes(boxes,confidences,0.4,0.6)
	font = cv2.FONT_HERSHEY_PLAIN
	
	myvals=[]
	dictionary = {}
	i =0
	for i in range(len(boxes)):
	    if i in indexes:
	        x,y,w,h = boxes[i]
	        label = str(classes[class_ids[i]])
	        myvals.append(label)
	        color = colors[i]
	        cv2.rectangle(img,(x,y),(x+w,y+h),color,2)
	        cv2.putText(img,label,(x,y+30),font,1,(255,255,255),2)
	
	for elements in myvals:
	        if elements[-1] == '.':
	            elements = elements[0:len(elements) - 1]
	        if elements in dictionary:
	            dictionary[elements] += 1
	        else:
	            dictionary.update({elements: 1})
	
	for allKeys in dictionary:
	    print("Frequency of ", allKeys, end = " ")
	    print(":", end = " ")
	    print(dictionary[allKeys], end = " ")
	    print()
	
	# cv2.imshow("Image",img)
	# cv2.waitKey(0)
	# cv2.destroyAllWindows()
	# return request.get(jsonify(dictionary))
	temp = jsonify(dictionary)
	#return requests.get("http://127.0.0.1:5000/").temp
	return temp

	# r = requests.get("http://127.0.0.1:5000/")
    # return Response(r.text,status=r.status_code,content_type=r.headers['content-type'],temp)
	
if __name__ == "__main__":
    app.run(debug=True)
