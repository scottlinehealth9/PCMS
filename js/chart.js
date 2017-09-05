jQuery(function($) {

    var isMobile = false;

    if($('.responsive-menu').css('display') === 'none') {
        isMobile = true;
    }

    if (isMobile) {

        $("#chart").css('background-image', 'url("/wp-content/themes/roam/images/fallback-mobile.png")')
                    .css('background-size', 'cover')
                    .css('background-position', 'center')
                    .css('top', '0')
                    .css('bottom', '0')
                    .css('left', '0')
                    .css('right', '0')
                    .css('content', ' ');

    } else {
        var graph;
        function myGraph() {

        // Add and remove elements on the graph object
        this.addNode = function (id, color, stroke, group) {
          nodes.push({ "id": id, "color": color, "stroke": stroke, "group": group });
          update();
        };

        this.removeNode = function (id) {
          var i = 0;
          var n = findNode(id);
          while (i < links.length) {
            if ((links[i]['source'] == n.id) || (links[i]['target'] == n.id)) {
              links.splice(i, 1);
            }
            else i++;
          }
          nodes.splice(findNodeIndex(id), 1);
          update();
        };

        this.removeLink = function (source, target) {
          for (var i = 0; i < links.length; i++) {
            if (links[i].source.id == source && links[i].target.id == target) {
              links.splice(i, 1);
              break;
            }
          }
          update();
        };

        this.removeallLinks = function () {
          links.splice(0, links.length);
          update();
        };

        this.removeAllNodes = function () {
          nodes.splice(0, links.length);
          update();
        };

        this.addLink = function (source, target, value, group) {
          links.push({"source": findNode(source), "target": findNode(target), "value": value, "group": group });
          update();
        };

        var findNode = function (id) {
          for (var i in nodes) {
            if (nodes[i]["id"] === id) return nodes[i];
          }
          ;
        };

        var findNodeIndex = function (id) {
          for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].id == id) {
                return i;
            }
          }
          ;
        };

        // set up the D3 visualisation in the specified element
        var w = 1000,
            h = 1000;

        var vis = d3.select("#chart")
                .append("svg:svg")
                .attr("width", '100%')
                .attr("height", '100%')
                .attr("id", "svg")
                .attr("pointer-events", "all")
                // .attr("fill-opacity", "0")
                .attr("viewBox", isMobile ? w/4 + " 0 " + w/2 + " " + h : w/2 + " 0 " + w/2 + " " + h)
                .attr("perserveAspectRatio", "xMinYMin meet");

        vis = vis.append('svg:g').attr('x', '0').attr('y', '0');

        var force = d3.layout.force();

        var nodes = force.nodes(),
            links = force.links();

        var update = function () {
            var link = vis.selectAll("line")
                    .data(links, function (d) {
                        return d.source.id + "-" + d.target.id;
                    });

            link.enter().append("line")
                    .attr("id", function (d) {
                        return d.source.id + "-" + d.target.id;
                    })
                    .attr("stroke-width", "0.6")
                    .attr("stroke", "#C7D1D3")
                    .attr("stroke-opacity", "0.34")
                    .attr("class", function (d) { return "link " + "group-" + d.group + "-link" });

            link.exit().remove();

            var node = vis.selectAll("g.node")
                    .data(nodes, function (d) {
                        return d.id;
                    });

            var nodeEnter = node.enter().append("g")
                    .attr("class", "node")
                    .call(force.drag);

            nodeEnter.append("svg:circle")
                    .attr("r", 6)
                    .attr("id", function (d) {
                        return "Node;" + d.id;
                    })
                    .attr("fill-opacity", "1")
                    .attr("class", function (d) { return "nodeStrokeClass " + "group-" + d.group + "-node" })
                    .attr("fill", function (d) { return d.color })
                    .attr("stroke", function (d) { return d.stroke })
                    .attr("stroke-opacity", "0.64");

            node.exit().remove();

            force.on("tick", function () {

                node.attr("transform", function (d) {
                    return "translate(" + d.x + "," + d.y + ")";
                });

                link.attr("x1", function (d) {
                    return d.source.x;
                })
                        .attr("y1", function (d) {
                            return d.source.y;
                        })
                        .attr("x2", function (d) {
                            return d.target.x;
                        })
                        .attr("y2", function (d) {
                            return d.target.y;
                        });
            });

            // Restart the force layout.
            force
                    .gravity(.2)
                    .charge(-400) //8000
                    // .friction(0)
                    .linkDistance( function(d) { return d.value * 10 } )
                    .linkStrength(.3)
                    // .linkDistance(80)
                    .size([w, h])
                    .start();
        };


        // Make it all go
        update();
        }

        function drawGraph() {

            graph = new myGraph("#svgdiv");


            // RKG NODES
            graph.addNode('A', '#FFFFFF', '#000000', 0);
            graph.addNode('B', '#FFFFFF', '#000000', 0);

            // GROUP 1
            graph.addNode('1', '#DEDEDE', '#FFFFFF', 1);
            graph.addNode('1A', '#DEDEDE', '#FFFFFF', 1);
            graph.addNode('1B', '#DEDEDE', '#FFFFFF', 1);
            graph.addNode('1C', '#DEDEDE', '#FFFFFF', 1);
            graph.addNode('1D', '#DEDEDE', '#FFFFFF', 1);
            graph.addNode('1E', '#DEDEDE', '#FFFFFF', 1);
            graph.addNode('1F', '#DEDEDE', '#FFFFFF', 1);
            graph.addNode('1G', '#DEDEDE', '#FFFFFF', 1);
            graph.addNode('1H', '#DEDEDE', '#FFFFFF', 1);
            graph.addNode('1I', '#DEDEDE', '#FFFFFF', 1);
            graph.addNode('1J', '#DEDEDE', '#FFFFFF', 1);
            graph.addNode('1K', '#DEDEDE', '#FFFFFF', 1);
            graph.addNode('1L', '#DEDEDE', '#FFFFFF', 1);
            graph.addNode('1M', '#DEDEDE', '#FFFFFF', 1);
            graph.addNode('1N', '#DEDEDE', '#FFFFFF', 1);
            graph.addNode('1O', '#DEDEDE', '#FFFFFF', 1);

            graph.addLink('1A', '1', 5, 1);
            graph.addLink('1B', '1', 5, 1);
            graph.addLink('1C', '1', 5, 1);
            graph.addLink('1D', '1', 5, 1);
            graph.addLink('1E', '1', 5, 1);
            graph.addLink('1F', '1', 5, 1);
            graph.addLink('1G', '1', 5, 1);
            graph.addLink('1H', '1', 5, 1);
            graph.addLink('1I', '1', 5, 1);
            graph.addLink('1J', '1', 5, 1);
            graph.addLink('1K', '1', 5, 1);
            graph.addLink('1L', '1', 5, 1);
            graph.addLink('1M', '1', 5, 1);
            graph.addLink('1N', '1', 5, 1);
            graph.addLink('1O', '1', 5, 1);

            // GROUP 2
            graph.addNode('2', '#DEDEDE', '#FFFFFF', 2);
            graph.addNode('2A', '#DEDEDE', '#FFFFFF', 2);
            graph.addNode('2B', '#DEDEDE', '#FFFFFF', 2);
            graph.addNode('2C', '#DEDEDE', '#FFFFFF', 2);
            graph.addNode('2D', '#DEDEDE', '#FFFFFF', 2);
            graph.addNode('2E', '#DEDEDE', '#FFFFFF', 2);
            graph.addNode('2F', '#DEDEDE', '#FFFFFF', 2);
            graph.addNode('2G', '#DEDEDE', '#FFFFFF', 2);

            graph.addLink('2A', '2', 5, 2);
            graph.addLink('2B', '2', 5, 2);
            graph.addLink('2C', '2', 5, 2);
            graph.addLink('2D', '2', 5, 2);
            graph.addLink('2E', '2', 5, 2);
            graph.addLink('2F', '2', 5, 2);
            graph.addLink('2G', '2', 5, 2);

            // GROUP 3
            graph.addNode('3', '#DEDEDE', '#FFFFFF', 3);
            graph.addNode('3A', '#DEDEDE', '#FFFFFF', 3);
            graph.addNode('3B', '#DEDEDE', '#FFFFFF', 3);
            graph.addNode('3C', '#DEDEDE', '#FFFFFF', 3);
            graph.addNode('3D', '#DEDEDE', '#FFFFFF', 3);
            graph.addNode('3E', '#DEDEDE', '#FFFFFF', 3);
            graph.addNode('3F', '#DEDEDE', '#FFFFFF', 3);
            graph.addNode('3G', '#DEDEDE', '#FFFFFF', 3);
            graph.addNode('3H', '#DEDEDE', '#FFFFFF', 3);
            graph.addNode('3I', '#DEDEDE', '#FFFFFF', 3);
            graph.addNode('3J', '#DEDEDE', '#FFFFFF', 3);
            graph.addNode('3K', '#DEDEDE', '#FFFFFF', 3);
            graph.addNode('3L', '#DEDEDE', '#FFFFFF', 3);
            graph.addNode('3M', '#DEDEDE', '#FFFFFF', 3);
            graph.addNode('3N', '#DEDEDE', '#FFFFFF', 3);

            graph.addLink('3A', '3', 5, 3);
            graph.addLink('3N', '3G', 5, 3);
            graph.addLink('3B', '3', 5, 3);
            graph.addLink('3M', '3E', 5, 3);
            graph.addLink('3C', '3', 5, 3);
            graph.addLink('3L', '3H', 5, 3);
            graph.addLink('3D', '3', 5, 3);
            graph.addLink('3K', '3A', 5, 3);
            graph.addLink('3E', '3', 5, 3);
            graph.addLink('3J', '3B', 5, 3);
            graph.addLink('3F', '3', 5, 3);
            graph.addLink('3I', '3C', 5, 3);
            graph.addLink('3G', '3', 5, 3);
            graph.addLink('3D', '3F', 5, 3);
            graph.addLink('3H', '3', 5, 3);
            graph.addLink('3G', '3B', 5, 3);
            graph.addLink('3I', '3', 5, 3);
            graph.addLink('3J', '3N', 5, 3);
            graph.addLink('3J', '3', 5, 3);
            graph.addLink('3A', '3C', 5, 3);
            graph.addLink('3K', '3', 5, 3);
            graph.addLink('3F', '3L', 5, 3);
            graph.addLink('3L', '3', 5, 3);
            graph.addLink('3D', '3H', 5, 3);
            graph.addLink('3M', '3', 5, 3);
            graph.addLink('3I', '3E', 5, 3);
            graph.addLink('3N', '3', 5, 3);
            graph.addLink('3K', '3M', 5, 3);

            // GROUP 4

            graph.addNode('4', '#DEDEDE', '#FFFFFF', 4);
            graph.addNode('4A', '#DEDEDE', '#FFFFFF', 4);
            graph.addNode('4B', '#DEDEDE', '#FFFFFF', 4);
            graph.addNode('4C', '#DEDEDE', '#FFFFFF', 4);
            graph.addNode('4D', '#DEDEDE', '#FFFFFF', 4);
            graph.addNode('4E', '#DEDEDE', '#FFFFFF', 4);
            graph.addNode('4F', '#DEDEDE', '#FFFFFF', 4);
            graph.addNode('4G', '#DEDEDE', '#FFFFFF', 4);
            graph.addNode('4H', '#DEDEDE', '#FFFFFF', 4);
            graph.addNode('4I', '#DEDEDE', '#FFFFFF', 4);
            graph.addNode('4J', '#DEDEDE', '#FFFFFF', 4);
            graph.addNode('4K', '#DEDEDE', '#FFFFFF', 4);
            graph.addNode('4L', '#DEDEDE', '#FFFFFF', 4);
            graph.addNode('4M', '#DEDEDE', '#FFFFFF', 4);
            graph.addNode('4N', '#DEDEDE', '#FFFFFF', 4);
            graph.addNode('4O', '#DEDEDE', '#FFFFFF', 4);
            graph.addNode('4P', '#DEDEDE', '#FFFFFF', 4);

            graph.addLink('4A', '4', 5, 4);
            graph.addLink('4B', '4', 5, 4);
            graph.addLink('4C', '4', 5, 4);
            graph.addLink('4D', '4', 5, 4);
            graph.addLink('4E', '4', 5, 4);
            graph.addLink('4F', '4', 5, 4);
            graph.addLink('4G', '4', 5, 4);
            graph.addLink('4H', '4', 5, 4);
            graph.addLink('4I', '4', 5, 4);
            graph.addLink('4J', '4', 5, 4);
            graph.addLink('4K', '4', 5, 4);
            graph.addLink('4L', '4', 5, 4);
            graph.addLink('4M', '4', 5, 4);
            graph.addLink('4N', '4', 5, 4);
            graph.addLink('4O', '4', 5, 4);
            graph.addLink('4P', '4', 5, 4);

            // GROUP 5

            graph.addNode('5', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5A', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5B', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5C', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5D', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5E', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5F', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5G', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5H', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5I', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5J', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5K', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5L', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5M', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5N', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5O', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5P', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5Q', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5R', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5S', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5T', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5U', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5V', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5W', '#DEDEDE', '#FFFFFF', 5);
            graph.addNode('5X', '#DEDEDE', '#FFFFFF', 5);

            graph.addLink('5A', '5', 5, 5);
            graph.addLink('5B', '5', 5, 5);
            graph.addLink('5C', '5', 5, 5);
            graph.addLink('5D', '5', 5, 5);
            graph.addLink('5E', '5', 5, 5);
            graph.addLink('5F', '5', 5, 5);
            graph.addLink('5G', '5', 5, 5);
            graph.addLink('5H', '5', 5, 5);
            graph.addLink('5I', '5', 5, 5);
            graph.addLink('5J', '5', 5, 5);
            graph.addLink('5K', '5', 5, 5);
            graph.addLink('5L', '5', 5, 5);
            graph.addLink('5M', '5', 5, 5);
            graph.addLink('5N', '5', 5, 5);
            graph.addLink('5O', '5', 5, 5);
            graph.addLink('5P', '5', 5, 5);
            graph.addLink('5Q', '5', 5, 5);
            graph.addLink('5R', '5', 5, 5);
            graph.addLink('5S', '5', 5, 5);
            graph.addLink('5T', '5', 5, 5);
            graph.addLink('5U', '5', 5, 5);
            graph.addLink('5V', '5', 5, 5);
            graph.addLink('5W', '5', 5, 5);
            graph.addLink('5X', '5', 5, 5);

            // GROUP 6
            graph.addNode('6', '#DEDEDE', '#FFFFFF', 6);
            graph.addNode('6A', '#DEDEDE', '#FFFFFF', 6);
            graph.addNode('6B', '#DEDEDE', '#FFFFFF', 6);
            graph.addNode('6C', '#DEDEDE', '#FFFFFF', 6);
            graph.addNode('6D', '#DEDEDE', '#FFFFFF', 6);
            graph.addNode('6E', '#DEDEDE', '#FFFFFF', 6);
            graph.addNode('6F', '#DEDEDE', '#FFFFFF', 6);
            graph.addNode('6G', '#DEDEDE', '#FFFFFF', 6);
            graph.addNode('6H', '#DEDEDE', '#FFFFFF', 6);
            graph.addNode('6I', '#DEDEDE', '#FFFFFF', 6);
            graph.addNode('6J', '#DEDEDE', '#FFFFFF', 6);
            graph.addNode('6K', '#DEDEDE', '#FFFFFF', 6);
            graph.addNode('6L', '#DEDEDE', '#FFFFFF', 6);

            graph.addLink('6A', '6', 5, 6);
            graph.addLink('6B', '6', 5, 6);
            graph.addLink('6C', '6', 5, 6);
            graph.addLink('6D', '6', 5, 6);
            graph.addLink('6E', '6', 5, 6);
            graph.addLink('6F', '6', 5, 6);
            graph.addLink('6G', '6', 5, 6);
            graph.addLink('6H', '6', 5, 6);
            graph.addLink('6I', '6', 5, 6);
            graph.addLink('6J', '6', 5, 6);
            graph.addLink('6K', '6', 5, 6);
            graph.addLink('6L', '6', 5, 6);

            // GROUP 7
            graph.addNode('7', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7A', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7B', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7C', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7D', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7E', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7F', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7G', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7H', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7I', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7J', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7K', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7L', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7M', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7N', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7O', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7P', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7Q', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7R', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7S', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7T', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7U', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7V', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7W', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7X', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7Y', '#B8B8B8', '#FFFFFF', 7);
            graph.addNode('7Z', '#B8B8B8', '#FFFFFF', 7);

            graph.addLink('7A', '7', 5, 7);
            graph.addLink('7B', '7', 5, 7);
            graph.addLink('7C', '7', 5, 7);
            graph.addLink('7D', '7', 5, 7);
            graph.addLink('7E', '7', 5, 7);
            graph.addLink('7F', '7', 5, 7);
            graph.addLink('7G', '7', 5, 7);
            graph.addLink('7H', '7', 5, 7);
            graph.addLink('7I', '7', 5, 7);
            graph.addLink('7J', '7', 5, 7);
            graph.addLink('7K', '7', 5, 7);
            graph.addLink('7L', '7', 5, 7);
            graph.addLink('7M', '7', 5, 7);
            graph.addLink('7N', '7', 5, 7);
            graph.addLink('7O', '7', 5, 7);
            graph.addLink('7P', '7', 5, 7);
            graph.addLink('7Q', '7', 5, 7);
            graph.addLink('7R', '7', 5, 7);
            graph.addLink('7S', '7', 5, 7);
            graph.addLink('7T', '7', 5, 7);
            graph.addLink('7U', '7', 5, 7);
            graph.addLink('7V', '7', 5, 7);
            graph.addLink('7W', '7', 5, 7);
            graph.addLink('7X', '7', 5, 7);
            graph.addLink('7Y', '7', 5, 7);
            graph.addLink('7Z', '7', 5, 7);


            keepNodesOnTop();

            // callback for the changes in the network
            var step = -1;
            function nextval()
            {
                step++;
                return 2000 + (1500*step); // initial time, wait time
            }

            setTimeout(function() {
                graph.addLink('1', 'A', 10, 1);
                var eds = document.getElementsByClassName('group-1-link');
                for(var i = 0; i < eds.length; i++) {
                    eds[i].setAttribute('stroke-opacity', '0.64');
                    eds[i].setAttribute('stroke-width', '1');
                }

                eds = document.getElementsByClassName('group-1-node');
                for(var i = 0; i < eds.length; i++) eds[i].style.fill = "#876DB5";
                keepNodesOnTop();
            }, nextval());

            setTimeout(function() {
                graph.addLink('4', 'B', 10, 4);
                var eds = document.getElementsByClassName('group-4-link');
                for(var i = 0; i < eds.length; i++) {
                    eds[i].setAttribute('stroke-opacity', '0.64');
                    eds[i].setAttribute('stroke-width', '1');
                }

                eds = document.getElementsByClassName('group-4-node');
                for(var i = 0; i < eds.length; i++) eds[i].style.fill = "#32A8B4";
                keepNodesOnTop();
            }, nextval());

            setTimeout(function() {
                graph.addLink('2', 'A', 10, 2);
                var eds = document.getElementsByClassName('group-2-link');
                for(var i = 0; i < eds.length; i++) {
                    eds[i].setAttribute('stroke-opacity', '0.64');
                    eds[i].setAttribute('stroke-width', '1');
                }

                eds = document.getElementsByClassName('group-2-node');
                for(var i = 0; i < eds.length; i++) eds[i].style.fill = "#607D8B";

                keepNodesOnTop();
            }, nextval());

            setTimeout(function() {
                graph.addLink('5', 'B', 10, 5);
                var eds = document.getElementsByClassName('group-5-link');
                for(var i = 0; i < eds.length; i++) {
                    eds[i].setAttribute('stroke-opacity', '0.64');
                    eds[i].setAttribute('stroke-width', '1');
                }

                eds = document.getElementsByClassName('group-5-node');
                for(var i = 0; i < eds.length; i++) eds[i].style.fill = "#8F8F43";
                keepNodesOnTop();
            }, nextval());

            setTimeout(function() {
                graph.addLink('3', 'A', 10, 3);
                var eds = document.getElementsByClassName('group-3-link');
                for(var i = 0; i < eds.length; i++) {
                    eds[i].setAttribute('stroke-opacity', '0.64');
                    eds[i].setAttribute('stroke-width', '1');
                }

                eds = document.getElementsByClassName('group-3-node');
                for(var i = 0; i < eds.length; i++) eds[i].style.fill = "#FDBA58";
                keepNodesOnTop();
            }, nextval());

            setTimeout(function() {
                graph.addLink('7', 'B', 10, 7);
                var eds = document.getElementsByClassName('group-7-link');
                for(var i = 0; i < eds.length; i++) {
                    eds[i].setAttribute('stroke-opacity', '0.64');
                    eds[i].setAttribute('stroke-width', '1');
                }

                keepNodesOnTop();
            }, nextval());

            setTimeout(function() {
                graph.addLink('4', 'A', 10, 4);
                var eds = document.getElementsByClassName('group-4-link');
                for(var i = 0; i < eds.length; i++) {
                    eds[i].setAttribute('stroke-opacity', '0.64');
                    eds[i].setAttribute('stroke-width', '1');
                }

                keepNodesOnTop();
            }, nextval());

            setTimeout(function() {
                graph.addLink('1', 'B', 10, 1);
                var eds = document.getElementsByClassName('group-1-link');
                for(var i = 0; i < eds.length; i++) {
                    eds[i].setAttribute('stroke-opacity', '0.64');
                    eds[i].setAttribute('stroke-width', '1');
                }

                keepNodesOnTop();
            }, nextval());

            setTimeout(function() {
                graph.addLink('5', 'A', 10, 5);
                var eds = document.getElementsByClassName('group-5-link');
                for(var i = 0; i < eds.length; i++) {
                    eds[i].setAttribute('stroke-opacity', '0.64');
                    eds[i].setAttribute('stroke-width', '1');
                }

                keepNodesOnTop();
            }, nextval());

            setTimeout(function() {
                graph.addLink('3', 'B', 10, 3);
                var eds = document.getElementsByClassName('group-3-link');
                for(var i = 0; i < eds.length; i++) {
                    eds[i].setAttribute('stroke-opacity', '0.64');
                    eds[i].setAttribute('stroke-width', '1');
                }

                keepNodesOnTop();
            }, nextval());

            setTimeout(function() {
                graph.addLink('6', 'A', 10, 6);
                var eds = document.getElementsByClassName('group-6-link');
                for(var i = 0; i < eds.length; i++) {
                    eds[i].setAttribute('stroke-opacity', '0.64');
                    eds[i].setAttribute('stroke-width', '1');
                }

                eds = document.getElementsByClassName('group-6-node');
                for(var i = 0; i < eds.length; i++) eds[i].style.fill = "#4D8951";

                keepNodesOnTop();
            }, nextval());

            setTimeout(function() {
                graph.addLink('6', 'B', 10, 6);
                var eds = document.getElementsByClassName('group-6-link');
                for(var i = 0; i < eds.length; i++) {
                    eds[i].setAttribute('stroke-opacity', '0.64');
                    eds[i].setAttribute('stroke-width', '1');
                }

                keepNodesOnTop();
            }, nextval());

            setTimeout(function() {
                graph.addLink('7', 'A', 10, 7);
                var eds = document.getElementsByClassName('group-7-link');
                for(var i = 0; i < eds.length; i++) {
                    eds[i].setAttribute('stroke-opacity', '0.64');
                    eds[i].setAttribute('stroke-width', '1');
                }

                keepNodesOnTop();
            }, nextval());

            setTimeout(function() {
                graph.addLink('2', 'B', 10, 2);
                var eds = document.getElementsByClassName('group-2-link');
                for(var i = 0; i < eds.length; i++) {
                    eds[i].setAttribute('stroke-opacity', '0.64');
                    eds[i].setAttribute('stroke-width', '1');
                }

                keepNodesOnTop();
            }, nextval());

        }

        drawGraph();

        // because of the way the network is created, nodes are created first, and links second,
        // so the lines were on top of the nodes, this just reorders the DOM to put the svg:g on top
        function keepNodesOnTop() {
            $(".nodeStrokeClass").each(function( index ) {
                var gnode = this.parentNode;
                gnode.parentNode.appendChild(gnode);
            });
        }
        function addNodes() {
            d3.select("svg")
                    .remove();
             drawGraph();
        }
    }
});